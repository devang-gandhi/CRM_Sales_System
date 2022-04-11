import axios from 'axios';

export const getAllRecords =  () =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await axios.get(
                'http://localhost:3001/record',
                {
                    headers:{
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlZkBlbWFpbC5jb20iLCJpYXQiOjE2NDkzMjUyMjQsImV4cCI6MTY0OTMyNTgyNH0.-B8N3WsFLpRDagX2NRN9pNdzMsfOGMQfCBKDkPQQ6r0'
                    }
            });
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}