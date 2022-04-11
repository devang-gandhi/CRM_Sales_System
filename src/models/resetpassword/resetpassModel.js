const { randompin } = require('../../assets/randompin');
const{resetpass} = require('./resetpassSchema');

const setpassresetpin = async (email) =>{

    const pinlength = 6;
    const ranpin = await randompin(pinlength);

    const restobj = {
        email,
        pin: ranpin
    }

    return new Promise((resolve, reject)=>{
        resetpass(restobj).save()
        .then(data => resolve(data))
        .catch((error) => reject(error))
    })
}

const pinbymailpin = (email, pin)=>{
    return new Promise((resolve, reject)=>{
        try {
            resetpass.findOne({email, pin}, (error, data)=>{
                if(error){
                    console.log(error);
                    resolve(false);
                }
                resolve(data);
            })
        } catch (error) {
            reject(error);
            console.log(error);
        }
    });
};

const deletepin = (email, pin)=>{
        try {
            resetpass.findOneAndDelete({email, pin}, (error, data)=>{
                if(error){
                    console.log(error);
                }
            })
        } catch (error) {
            console.log(error);
        }
};


module.exports={
    setpassresetpin,
    pinbymailpin,
    deletepin
}