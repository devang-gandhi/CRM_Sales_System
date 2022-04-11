const mongoose = require('mongoose');
const schema = mongoose.Schema;

const recordSchema = new schema({
    clientid:{
        type: schema.Types.ObjectId
    },
    createdate:{
        type: Date,
        required: true,
        default: Date.now()
    },
    enquiryno:{
        type: Number,
        required:true,
        minlength:2,
        maxlength:8
    },
    customername:{
        type:String,
        minlength:2,
        required:true
    },
    enquiry:{
        type:String,
        maxlength: 20,
        required:true
    },
    amount:{
        type: Number,
        maxlength: 10,
        minlength: 1,
        required: true
    },
    assignedto:{
        type: String,
        minlength:2,
        required:true,
    },
    status:{
        type: String,
        maxlength: 30,
        minlength: 7,
        required: true,
        default:'Response pending..'
    },
    history: [
        {
            date:{
                type: Date,
                default: Date.now()
            },
            message:{
                type: String,
                maxlength: 1000,
                required: true,
                default: ''
            },
            messageby:{
                type: String,
                maxlength: 20,
                required: true,
                default: ''
            }
        }
    ]
});

module.exports = {
    records: mongoose.model('records',recordSchema)
}