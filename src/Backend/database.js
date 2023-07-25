const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/ecommerce"

const connectToMongoose =()=>{
    mongoose.connect(mongoURI , ()=>console.log("Connected to Mongo successfully"))
}

module.exports =  connectToMongoose;
