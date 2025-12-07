let mongoose = require("mongoose");

let coursechema = mongoose.Schema({


  Coursename: String,

  courseduration: String,

  Overallrating: String,

  commaent: String,
  
});

const coursedata = mongoose.model("course", coursechema);
module.exports = coursedata
