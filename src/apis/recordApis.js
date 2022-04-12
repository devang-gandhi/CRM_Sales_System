import axios from 'axios';
const getSingleRecordUrl = 'http://localhost:3001/record/';
const closeRecordUrl = 'http://localhost:3001/record/close-record/';
const createRecordUrl = 'http://localhost:3001/record';

export const getAllRecords =  () =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get(
                'http://localhost:3001/record',
                {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT')
                    }
            });
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

export const getSingleRecord =  (_id) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get(
                getSingleRecordUrl + _id,
                {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT')
                    }
            });
            resolve(result);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    });
}

export const updateReplyRecord =  (_id, msgObj) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.put(
                getSingleRecordUrl + _id, msgObj,
                {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT'),
                    },
            });
            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    });
}

export const updateRecordStatusClose =  (_id) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.patch(
                closeRecordUrl + _id, {} ,
                {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT'),
                    },
            });
            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    });
}

export const createNewRecord =  (frmdata) =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.post(
                createRecordUrl, frmdata,
                {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT'),
                    },
                });
            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    });
}

