const { reject } = require("bcrypt/promises");
const { records } = require("./recordSchema");

const insertRecord = recordObj =>{
    
    return new Promise((resolve, reject)=>{
        try {
            records(recordObj).save() 
            .then(data=>resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error); 
        }
    });
};

const getRecords = userid =>{
    
    return new Promise((resolve, reject)=>{
        try {
            records.find({userid}) 
            .then(data=>resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error); 
        }
    });
};

const getRecordById = (_id,userid) =>{
    
    return new Promise((resolve, reject)=>{
        try {
            records.find({_id,userid}) 
            .then(data=>resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error); 
        }
    });
};

const updateCustomerMessages = ({_id,message, messageby}) =>{
    
    return new Promise((resolve, reject)=>{
        try {
            records.findOneAndUpdate({_id},
                {
                    status: 'Response pending..',
                    $push : {
                        history: {message, messageby},
                    },
                },
                {new: true}) 
            .then(data=>resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error); 
        }
    });
};

const updateStatus = ({_id,userid}) =>{
    
    return new Promise((resolve, reject)=>{
        try {
            records.findOneAndUpdate({_id, userid},
                {
                    status: 'Closed',
                },
                {new: true}) 
            .then(data=>resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error); 
        }
    });
};

const deleteRecord = ({_id,userid}) =>{
    
    return new Promise((resolve, reject)=>{
        try {
            records.findOneAndDelete({_id, userid}) 
            .then(data=>resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error); 
        }
    });
};

module.exports={
    insertRecord,
    getRecords,
    getRecordById,
    updateCustomerMessages,
    updateStatus,
    deleteRecord,
}