const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDB");
})

db.on('error',()=>{
    console.log("error al conectar MongoDB");
})

module.exports=mongoose;