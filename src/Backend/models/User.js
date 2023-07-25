const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    address: {
        type: String,
        required : true
    },
    town: {
        type: String,
        required : true
    },
    pin : {
        type: String,
        required : true
    },
    phone : {
        type  : String , 
        required : true,
        unique : true
    },
    password: {
        type: String,
        required : true,
    },
    Date: {
        type: Date,
        default: Date.now,
    }
});

const User =  mongoose.model('user' , userSchema)
module.exports = User
