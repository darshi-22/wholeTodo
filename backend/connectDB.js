const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://dpshah2209:darshi22@todo.ctvjxwn.mongodb.net/');
        console.log('Mongodb connected');
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connectDB;
