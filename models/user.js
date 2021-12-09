const mongoose=require('mongoose')
const { Schema } = mongoose;


const userSchema=new mongoose.Schema({               //Schema for user registration  ( for model vs Schema read documentation)
    firstname:{
        type: String,
        default:null
    },
    lastname:{
        type: String,
        default:null
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type: String,
        },
    token:{
        type:String
    }
})
module.exports=mongoose.model('user',userSchema);      //exporting the model ...so that anyone can use this model