const mongoose = require('mongoose');
const schema = mongoose.Schema;

const resetpassSchema = new schema({
    pin:{
        type:String,
        maxlength:6,
        minlength:6
    },
    email:{
        type:String,
        maxlength:50,
        required:true
    },
    addedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
});

module.exports = {
    resetpass: mongoose.model('resetpass',resetpassSchema)
}