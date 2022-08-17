const mongoose= require("mongoose");



const DbConnect=async()=>{
    try{
      let result=await mongoose.connect("mongodb+srv://chayma:chayma123@cluster0.gmdahu0.mongodb.net/gaming?retryWrites=true&w=majority");
      console.log("database is connected")
    }catch (error){
        console.log(error)

    }
};
module.exports= DbConnect;  