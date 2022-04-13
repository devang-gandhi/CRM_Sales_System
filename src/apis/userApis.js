import axios from 'axios'

const loginurl = 'http://localhost:3001/user/login';
const userProurl = 'http://localhost:3001/user';
const userLogouturl = 'http://localhost:3001/user/logout';
const userRegurl = 'http://localhost:3001/user';
const userVerifyurl = 'http://localhost:3001/user/verify';

export const userLogin = frmdata =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const res = await axios.post(loginurl, frmdata);
            resolve(res.data);

            if(res.data.status === 'success'){
                sessionStorage.setItem('accessJWT', res.data.accessJWT);
                localStorage.setItem('CRM', JSON.stringify({refreshJWT: res.data.reJWT}));
            }

        } catch (error) {;
            reject(error);
        }
    });
};

export const fetchUser = () =>{
    return new Promise(async(resolve, reject)=>{
        try {

            const token = sessionStorage.getItem('accessJWT');

            if(!token){
                reject('token not found:(');
            }

            const res = await axios.get(userProurl, {
                headers:{
                    Authorization: token
                }
            });
            resolve(res.data);

        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    });
};

export const userLogout = async()=>{
    try {
        const token = sessionStorage.getItem('accessJWT');
        await axios.delete(userLogouturl, {headers:{
            Authorization: token
        }});
    } catch (error) {
        console.log(error);
    }
};

export const userRegistration = frmdata =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const res = await axios.post(userRegurl, frmdata);
            resolve(res.data);

            if(res.data.status === 'success'){
               resolve(res.data);
            }

        } catch (error) {;
            reject(error);
        }
    });
};

export const userRegistrationVerification = frmdata =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const res = await axios.patch(userVerifyurl, frmdata);
            resolve(res.data);
            console.log(res.data);

            if(res.data.status === 'success'){
               resolve(res.data);
            }

        } catch (error) {;
            reject({status: 'error', message:error.message});
        }
    });
};


