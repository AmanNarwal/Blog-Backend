const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // console.log('connecting to the database')

        //connect to the database
        await mongoose.connect('mongodb+srv://narwal:123@aman.ajwr4y9.mongodb.net/Aman?retryWrites=true&w=majority&appName=aman');
    }catch(err){
        console.log('Error while connecting database: ', err);
    }
}

module.exports = connectDB;

