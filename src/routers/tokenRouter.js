const express= require('express');
const { verifyRefreshJWT, createJWT } = require('../helper/jsonwebtoken');
const { getuser } = require('../models/user/userModel');
const router = express.Router();

router.get('/', async (req,res,next) =>{
    const {authorization} = req.headers;

    const decoded = await verifyRefreshJWT(authorization);
    if(decoded.email){
        const profile = await getuser(decoded.email);
        if(profile._id){;
            let tokenexp = profile.refreshJWT.addedAt;
            const DBrefreshtoken = profile.refreshJWT.token;

            tokenexp = tokenexp.setDate(tokenexp.getDate() + +process.env.JWT_REFRESH_EXP_DATE);
            
            const today = new Date();

            if(DBrefreshtoken!== authorization &&  tokenexp < today){
              return res.status(403).json({message:'Forbidden'}); 
            }

            const accessJWT = await createJWT(decoded.email, profile._id.toString());
            return res.json({status:'success', accessJWT}); 
        }
    }

    res.status(403).json({message:'Forbidden'});
});




module.exports = router;