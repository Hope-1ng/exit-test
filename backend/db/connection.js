const mongoose =require('mongoose');
require('dotenv').config();
URL=process.env.url
mongoose.connect(URL).then((res)=>{
  console.log('connection established');
  
}).catch((err)=>{
  console.error(" MongoDB connection error:", err);
  
})
