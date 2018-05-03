var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );               // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({             // to support URL-encoded bodies
  extended: true
})); 

app.get("/", function(req, res){
    res.send("hello world");
});

app.listen(8080);