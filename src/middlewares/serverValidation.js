const Joi = require('joi');

const email= Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const pin= Joi.number().min(100000).max(999999).required();
const newpassword = Joi.string().min(8).max(30).required();
const enquiryno = Joi.number().min(10).max(9999999999).required();
const customername = Joi.string().min(2).required();
const enquiry = Joi.string().max(20).required();
const amount = Joi.number().min(1).max(9999999999).required();
const assignedto = Joi.string().min(2).required();
const message = Joi.string().max(1000);
const messageby = Joi.string().max(20);


const resetpasspin = (req,res,next)=>{
    
    const schema = Joi.object({email});

    const value = schema.validate(req.body);
    if(value.error){
        return res.json({status:'error', message: value.error.message});
    }
    next();
}

const updatepassValidation = (req,res,next)=>{
    
    const schema = Joi.object({email, pin, newpassword});

    const value = schema.validate(req.body);
    if(value.error){
        return res.json({status:'error', message: value.error.message});
    }
    next();
}

const createRecordValidation = (req,res,next)=>{
    const schema = Joi.object({
        enquiryno,
        customername,
        enquiry,
        amount,
        assignedto,
    });
    const value = schema.validate(req.body);
    if(value.error){
        console.log(value.error);
        return res.json({status:'error', message: value.error.message});
    }
    next();
}

const updateMessageValidation = (req,res,next)=>{
    const schema = Joi.object({
        message,
        messageby,
    });
    const value = schema.validate(req.body);
    if(value.error){
        console.log(value.error);
        return res.json({status:'error', message: value.error.message});
    }
    next();
}

const newUserValidation = (req,res,next)=>{
    const schema = Joi.object({
        name : Joi.string().min(2).max(50).required(), 
        company: Joi.string().min(2).max(50).required(), 
        address: Joi.string().min(2).max(50).required(), 
        phone: Joi.number().min(1000000000).max(9999999999).required(), 
        email: email, 
        password: Joi.string().min(8).max(30).required(),
        cpassword: Joi.string().min(8).max(30).required(),
    });
    const value = schema.validate(req.body);
    if(value.error){
        console.log(value.error);
        return res.json({status:'error', message: value.error.message});
    }
    console.log('fire!');
    next();
}

module.exports={
    resetpasspin,
    updatepassValidation,
    createRecordValidation,
    updateMessageValidation,
    newUserValidation,
}