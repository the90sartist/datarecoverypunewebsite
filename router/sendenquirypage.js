var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var enquiry = require('../models/enquiry');

router.post('/',function(req,res){
console.log("Inside send enquiry page router");
  var name = req.body.Name;
  var email = req.body.Email;
  var mobileNo = req.body.MobileNo;
  var address = req.body.Address;
  var city = req.body.City;
  var description = req.body.Description;
  console.log(name + " " + email);
  var url = 'mongodb://alphapune:alphapune@ds135800.mlab.com:35800/alphapune';

mongoClient.connect(url, function(error,database){
 if(error){
   console.log("Error connecting database");
   throw error;
 }else{
   console.log("Connected");
   var newEnquiryObject = new enquiry({
      Name:name,
      Email:email,
      MobileNo:mobileNo,
      Address:address,
      City:city,
      Description:description
   })
   database.collection("Enquiry").insertOne(newEnquiryObject,function(error,success){
      if(error){
        console.log("Error while saving data");
        throw error;
      }else{
        res.send({Message:"Success"});
      }
   });
 }
});
  
});

module.exports = router;
