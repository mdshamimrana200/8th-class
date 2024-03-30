require("dotenv").config()

const mongodb = require("mongoose")
const url = process.env.URL_DB



    const connection = mongodb.connect(url)
   .then(()=>{
    console.log("connected");
   })
   .catch((err)=>{
    console.log(err);
   })
    
