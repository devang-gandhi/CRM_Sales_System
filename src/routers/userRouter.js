const express= require('express');
const router = express.Router();
const {insertUser, getuser, getUserById, updatePassword, storeAccessJWT, storeRefreshJWT, verifyUser} = require('../models/user/userModel')
const {users} = require('../models/user/userSchema')
const{hashPassword, comparePassword} = require('../helper/bcrypt');
const { createJWT, refreshJWT } = require('../helper/jsonwebtoken');
const { authorization } = require('../middlewares/authorization');
const { setpassresetpin, pinbymailpin, deletepin } = require('../models/resetpassword/resetpassModel');
const { mailProcessor } = require('../helper/nodemailer');
const { resetpasspin, updatepassValidation, newUserValidation } = require('../middlewares/serverValidation');

router.all('/', (req,res,next) =>{ 
    //  res.json({message:'user router'})
    next();
});

//get user profile
router.get('/', authorization, async (req,res)=>{

    const id = req.userID;
    const profile  = await getUserById(id);
    const {_id, name, email} = profile;

    res.json({user: {
        _id,
        name,
        email
    }});
});

//verify new user
router.patch('/verify', async(req,res)=>{
    try {
        const {id, email} = req.body;
        const result = await verifyUser(id, email);
        if( result && result._id){
            return res.json({status: 'success', message:'Your account has been verified, you can login now!'});
        }

        return res.json({status: 'error', message:'Something went wrong!'});
    } catch (error) {
        console.log(error);
        return res.json({status: 'error', message:'Invaild request!'});
    }
});

//new user router
router.post('/', newUserValidation, async (req,res)=> {

    const{name, company, address, phone, email, password} = req.body;


    try {

        const checkemail = await users.findOne({email:req.body.email});
        if(checkemail) return res.json({status: 'error',message: 'Email is already in database!'});

        //hashing
        const hashpass = await hashPassword(password)

        const newuserobj ={
            name,
            company,
            address,
            phone,
            email,
            password: hashpass
        }

        const result = await insertUser(newuserobj);
        console.log(result);

        await mailProcessor({
            email,
            type: 'new-user-confirmation',
            verificationLink: 'http://localhost:3000/verification/' + result._id + '/' + email,
        });

        res.json({status:'success', message:'New user created!', result})
    } catch (error) {
        console.log(error);
        // let message = 'Unable to create user, Please try again or contact Adminstration!';

        // if(error.message.includes('duplicate key error collection')){
        //     message = 'This email has been already registered!';
        // }
        res.json({status:'error',message:error.message});
    }
});

//user login
router.post('/login', async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        res.json({status: 'error', message:'Invaild form submition:('});
    }

    const user = await getuser(email);
    const passfrmdb = user && user._id ? user.password: null;

    if(!user.isVerified){
        return res.json({status: 'error', message: "You haven't verified you account make sure to verify before logging in!"});
    }

    if(!passfrmdb)
        return res.json({status: 'error', message: 'Invaild credentials:('});
    
    const result = await comparePassword(password, passfrmdb);

    if(!result)
        return res.json({status: 'error', message: 'Invaild credentials:('});

    const accessJWT = await createJWT(user.email, `${user._id}`);
    const reJWT = await refreshJWT(user.email, `${user._id}`);    
    res.json({status: 'success', message: 'Login successful!', accessJWT, reJWT});
});

//user password reset
router.post('/reset-password', resetpasspin, async (req,res)=>{
    const {email} = req.body;
    const user = await getuser(email);

    if(user && user._id){
        const setpin = await setpassresetpin(email);
        await mailProcessor({email, pin:setpin.pin, type: 'request-new-pass'});

        return res.json({status:'success', message:'If email is exist then we will send password reset pin in a while!'});
    }
    res.json({status:'error', message:'Must be registered or valid email!'});
});

//update password in db
router.patch('/reset-password', updatepassValidation, async(req,res)=>{
    const {email, pin, newpassword} = req.body;

    const getpin = await pinbymailpin(email, pin)
    if(getpin?._id){
        const DBdate = getpin.addedAt;
        const exp = 1;
        let expdate = DBdate.setDate(DBdate.getDate() + exp);
        const today = new Date();

        if(today > expdate){
            return res.json({status:'error', message:'Invaild or expired pin:('});
        }
        const hashedpass = await hashPassword(newpassword);
        const user = await updatePassword(email , hashedpass);

        if(user._id){
            await mailProcessor({email, type: 'pass-update'});
            deletepin(email, pin);
            return res.json({status:'success', message:'Your password has been successfully updated!'});
        }
    }
    res.json({status:'error', message:'unable to update your password!'});
});

//user logout
router.delete('/logout', authorization, async (req,res)=>{

    const {authorization} = req.headers;
    const id = req.userID;
    // const profile  = await getUserById(id);
    const r1=await storeAccessJWT(id, '');
    const r2=await storeRefreshJWT(id, '');

    if(r1._id && r2._id){
        return res.json({status:'success', message:'Logged out successfully!'});
    }

    return res.json({status:'error', message:'Unable to logout:('});
});

module.exports = router;
