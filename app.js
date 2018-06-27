var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
  // res.send("this will be the landing page")
  res.render("landing");
});

app.get("/books",function(req,res){
  var books = [
    {title: "The Outsider", image: "https://images-na.ssl-images-amazon.com/images/I/61TB0uwudsL._SX327_BO1,204,203,200_.jpg"},
    {title: "Sleeping Beauties", image: "https://images-na.ssl-images-amazon.com/images/I/41lpXkCIrCL._SX342_BO1,204,203,200_.jpg"},
    {title: "IT", image: "https://images-na.ssl-images-amazon.com/images/I/41aCsKYeDwL._SY291_BO1,204,203,200_QL40_.jpg"},
  ]
  res.render("books",{books:books});
});

var PORT = 5000 || process.env.PORT;

app.listen(PORT, process.env.IP, function(){
  console.log("bookdoer server started, listening to port " + PORT );
});
