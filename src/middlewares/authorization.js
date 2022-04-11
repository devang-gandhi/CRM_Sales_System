const { verifyJWT, getJWT } = require("../helper/jsonwebtoken");

const authorization = async (req,res,next) =>{
    const {authorization} = req.headers;

    const decoded = await verifyJWT(authorization)
    console.log(decoded);
    if(decoded.email){
        const userID = await getJWT(authorization)
        if(!userID){
            return res.status(403).json({message: 'Forbidden'});
        }
        req.userID = userID;
        return next();
    }

    res.status(403).json({message: 'Forbidden'});

}

module.exports ={
    authorization
}