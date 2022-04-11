const {users} = require('./userSchema');

const insertUser = userObj =>{
    return new Promise((resolve, reject)=>{
        users(userObj).save()
        .then(data => resolve(data))
        .catch((error) => reject(error))
    })
}

const getuser = email =>{

    return new Promise((resolve, reject)=>{
        if(!email) return false

        try {
            users.findOne({email}, (error, data)=>{
                if(error){
                    reject(error)
                }
                resolve(data)
            });
        } catch (error) {
           reject(error); 
        }
    });
}

const getUserById = _id =>{

    return new Promise((resolve, reject)=>{
        if(!_id) return false

        try {
            users.findOne({_id}, (error, data)=>{
                if(error){
                    reject(error)
                }
                resolve(data)
            });
        } catch (error) {
           reject(error); 
        }
    });
}

const storeAccessJWT = (_id, token) =>{
    return new Promise((resolve, reject)=>{
        try {
            users.findOneAndUpdate(
                {_id},
                {
                    $set:{'accessJWT.token':token, 'accessJWT.addedAt': Date.now()},
                },
                {new: true}
            )
                .then((data) =>resolve(data))
                .catch((error) =>{console.log(error); reject(error)});
        } catch (error) {
            reject(error);
        }
    });
};

const storeRefreshJWT = (_id, token) =>{
    return new Promise((resolve, reject)=>{
        try {
            users.findOneAndUpdate(
                {_id},
                {
                    $set:{'refreshJWT.token':token, 'refreshJWT.addedAt': Date.now()},
                },
                {new: true}
            )
                .then((data) =>resolve(data))
                .catch((error) =>{console.log(error); reject(error)});
        } catch (error) {
            reject(error);
        }
    });
};

const updatePassword = (email , newpass) =>{
    return new Promise((resolve, reject)=>{
        try {
            users.findOneAndUpdate(
                {email},
                {
                    $set:{'password':newpass },
                },
                {new: true}
            )
                .then((data) =>resolve(data))
                .catch((error) =>{console.log(error); reject(error)});
        } catch (error) {
            reject(error);
        }
    })
}

module.exports={
    insertUser,
    getuser,
    getUserById,
    storeAccessJWT,
    storeRefreshJWT,
    updatePassword
}