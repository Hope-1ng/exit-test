const express = require("express");
const router = express.Router();
const rating =require("../model/model");  

router.get("/rate", (req, res) => {
  rating.find().then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.status(500).json({error: "Internal Server Error"});
  }); 
 
});

module.exports = router;
