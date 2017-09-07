var express = require('express');
var bodyParser = require('body-parser');

var sendEnuqiryFormPage = require('./router/sendenquirypage');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/sendenquirypage',sendEnuqiryFormPage);


app.listen(PORT, function(){
    console.log("Server started " + PORT);
});