const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type:String,
        maxlength:50,
        required:true
    },
    company:{
        type:String,
        maxlength:10,
        required:true
    },
    address:{
        type:String,
        maxlength:100,
    },
    phone:{
        type:Number,
        maxlength:10,
    },
    email:{
        type:String,
        maxlength:50,
        required:true
    },
    password:{
        type:String,
        minlength:8,
        maxlength:500,
        required:true
    },
    accessJWT:{
        token:{
            type: String,
            maxlength: 500,
            default: ''
        },
        addedAt:{
            type: Date,
            required: true,
            default: Date.now()
        }
    },
    refreshJWT:{
        token:{
            type: String,
            maxlength: 500,
            default: ''
        },
        addedAt:{
            type: Date,
            required: true,
            default: Date.now()
        }
    },
    isVerified:{
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = {
    users: mongoose.model('users',userSchema)
}