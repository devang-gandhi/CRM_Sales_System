const express= require('express');
const { insertRecord, getRecords, getRecordById, updateCustomerMessages, updateStatus, deleteRecord } = require('../models/records/recordModel');
const { authorization } = require('../middlewares/authorization');
const { createRecordValidation, updateMessageValidation } = require('../middlewares/serverValidation');
const router = express.Router();

router.all('/', (req,res,next) =>{
    // res.json({message:'record router'})
    next();
});

//create new record
router.post('/', createRecordValidation, authorization , async(req,res)=>{
    try {
        const {enquiryno, customername, enquiry, amount, assignedto}=req.body;

        const uid = req.userID;

        const recordObj ={
            clientid: uid,
            enquiryno,
            customername,
            enquiry,
            amount,
            assignedto,
        }
        const result = await insertRecord(recordObj);
        console.log(result);
        if(result._id){
            return res.json({status:'success', message:'New record has been created!'});
        }

        return res.json({status:'error',message: 'Unable to create the record:('});
    } catch (error) {
        return res.json({status:'error',message: error.message}); 
    }
    
});

//get all records from specific user
router.get('/', authorization , async(req,res)=>{
    try {
        const uid = req.userID;

        const result = await getRecords(uid);
        console.log(result);
        return res.json({status:'success', result});
    } catch (error) {
        return res.json({status:'error',message: error.message}); 
    }   
});

//get record from id
router.get('/:_id', authorization , async(req,res)=>{
    try {

        const {_id} = req.params;
        const uid = req.userID;

        const result = await getRecordById(_id,uid);
        console.log(result);
        return res.json({status:'success', result});
    } catch (error) {
        return res.json({status:'error',message: error.message}); 
    }   
});

//update message from customer
router.put('/:_id', updateMessageValidation, authorization , async(req,res)=>{
    try {

        const {message, messageby} = req.body;
        const {_id} = req.params;

        const result = await updateCustomerMessages({_id,message, messageby});
        if(result._id){
            return res.json({status:'success', message:'Your message has been updated!'});
        }
        return res.json({status:'error', message:'Unable to update:('});
    } catch (error) {
        return res.json({status:'error',message: error.message}); 
    }   
});

//update status to close
router.patch('/close-record/:_id', authorization , async(req,res)=>{
    try {

        const {_id} = req.params;
        const uid = req.userID;

        const result = await updateStatus({_id,uid});
        if(result._id){
            return res.json({status:'success', message:'Record has been closed!'});
        }
        return res.json({status:'error', message:'Unable to close the record:('});
    } catch (error) {
        return res.json({status:'error',message: error.message}); 
    }   
});

//delete record
router.delete('/:_id', authorization , async(req,res)=>{
    try {

        const {_id} = req.params;
        const uid = req.userID;

        const result = await deleteRecord({_id,uid});
        if(result == null){
            return res.json({status:'error', message:'No records found:('});
        }
        return res.json({status:'success', message:'Record has been deleted!'});
    } catch (error) {
        return res.json({status:'error',message: error.message}); 
    }   
});



module.exports = router;