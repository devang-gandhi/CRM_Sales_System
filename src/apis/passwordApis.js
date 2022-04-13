import axios from 'axios';
const url = 'http://localhost:3001/user/reset-password';

export const reqOTP =  (email) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const {data} = await axios.post(url, {email});

            console.log(data);
            resolve(data);

        } catch (error) {
            reject(error);
        }
    });
};

export const updateUserPassword =  (passObj) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const {data} = await axios.patch(url, passObj);

            console.log(data);
            resolve(data);

        } catch (error) {
            reject(error);
        }
    });
}