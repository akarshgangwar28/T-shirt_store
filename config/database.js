const mongoose=require("mongoose")

const {MONGODB_URL}=process.env;



exports.connect= ()=>
 {
mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
   useUnifiedTopology:true,
})
.then(
    console.log("Database Connected succesfully")
)
.catch((error)=>{
    console.log("Failed DB Connection")
    console.log("erorr")
})}