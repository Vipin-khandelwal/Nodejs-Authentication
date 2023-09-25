require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
exports.connectMonggose =()=>{
    mongoose.connect('mongodb+srv://Vipin:VIP95in04@cluster0.zwij1ed.mongodb.net/Authentication',
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("✅ 🎉 Congratulation ! Your MongoDB is successfully connected! 🎉  =>> Nodejs Authentication"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
