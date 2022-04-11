const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = plainpassword =>{
    return new Promise(resolve=>{
        resolve(bcrypt.hashSync(plainpassword, saltRounds))
    });
};

const comparePassword = (plainpass , passfrmdb)=>{
    return new Promise((resolve, reject) =>{
        bcrypt.compare(plainpass, passfrmdb, function(err, result){
            if(err) reject(err);

            resolve(result);
        });
    });
};

module.exports ={
    hashPassword,
    comparePassword
}