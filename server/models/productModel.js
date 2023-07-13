const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"]
    },
    description:{
        type:String,
        required:[true, "Please Enter Product Description"]
    },
    price:{
        
    }
})