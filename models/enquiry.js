var mongoose = require('mongoose');
var enquirySchema = new mongoose.Schema({
  Name:{type:String},
  Email:{type:String},
  MobileNo:{type:String},
  Address:{type:String},
  City:{type:String},
  Description:{type:String}
});

var newEnquiry = mongoose.model("Enquiry",enquirySchema);
module.exports = newEnquiry;
