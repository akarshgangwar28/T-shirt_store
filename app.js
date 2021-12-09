const express=require("express")
require("dotenv").config();
require("./config/database").connect();
const jwt=require("jsonwebtoken")
const User=require("./models/user")
const bcrypt = require('bcryptjs');

const app=express();
 
app.get('/',(req,res)=> 
{
    res.send("<h1>Hello from auth system</h1>");
});

app.use(express.json());

app.post("/register",async(req,res)=>{

   try { 

    const {firstname , lastname, email, password}=req.body;

    if( !(email && firstname && lastname && password))
    {
        res.status(400).send("All fields are required")
    }
 
    const existingUser= await User.findOne({email})

    if(existingUser)                                    // check if user is not already registred or not
    {   
        res.status(401).send("User Already registered")
    }

    const encPassword=await  bcrypt.hash(password,10);     //encyrpt the password

    const user=await User.create({                         // new user info saved into DB or (create a document in database)
        firstname,
        lastname,
        email:email.toLowerCase(),
        password:encPassword
    })

    //token

    const token=jwt.sign(
        {user_id:user._id,email     },
        process.env.SECRET_KEY,
        {
            expiresIn:"2h"
        }
    )
    user.token=token
    //upadte or not in DB
    


    //TODO handel password situation
user.password=undefined;       // so that password not shown up in the object which we are sending as json(user)

    res.status(201).json(user)




       
   }
    catch (error) {
       
       console.log(error)

   }
})


app.post("/login",async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
    }

})
module.exports=app; 