const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { storeRefreshJWT, storeAccessJWT } = require('../models/user/userModel');
const {users} = require('../models/user/userSchema')

const createJWT = async(email, _id) =>{

    try {
        const accesstoken = jwt.sign({ email }, process.env.JWT_ACCESS, {expiresIn: '10m'});

        await storeAccessJWT(_id, accesstoken);
        return Promise.resolve(accesstoken);
    } catch (error) {
        return Promise.reject(error);
    }
}

const refreshJWT = async (email, _id) =>{

    try {
        const refreshtoken = jwt.sign({ email }, process.env.JWT_ACCESS, {expiresIn:'30d'});

        await storeRefreshJWT(_id, refreshtoken);
        return Promise.resolve(refreshtoken);
    } catch (error) {
        return Promise.reject(error);
    }

}

const getJWT= (token) =>{
    return new Promise((resolve, reject)=>{

        try {
            users.findOne({'accessJWT.token':token}, (error, res)=>{
                if(error){
                    reject(error)
                }
                resolve(res._id)
            });
        } catch (error) {
           reject(error); 
        }
    });
}

const verifyJWT = userJWT =>{
    try {
        return Promise.resolve(jwt.verify(userJWT, process.env.JWT_ACCESS))
    } catch (error) {
        return Promise.resolve(error)
    }
}

const verifyRefreshJWT = userJWT =>{
    try {
        return Promise.resolve(jwt.verify(userJWT, process.env.JWT_REFRESH))
    } catch (error) {
        return Promise.resolve(error)
    }
}

module.exports={
    createJWT,
    refreshJWT,
    getJWT,
    verifyJWT,
    verifyRefreshJWT
}


