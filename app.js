var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var books = [
  {title: "The Outsider", image: "https://images-na.ssl-images-amazon.com/images/I/61TB0uwudsL._SX327_BO1,204,203,200_.jpg"},
  {title: "Sleeping Beauties", image: "https://images-na.ssl-images-amazon.com/images/I/41lpXkCIrCL._SX342_BO1,204,203,200_.jpg"},
  {title: "IT", image: "https://images-na.ssl-images-amazon.com/images/I/41aCsKYeDwL._SY291_BO1,204,203,200_QL40_.jpg"},
]

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
  // res.send("this will be the landing page")
  res.render("landing");
});

app.get("/books",function(req,res){
  res.render("books",{books:books});
});

app.post("/books",function(req, res){
  // res.send("you just hit the post new campgrounds");
  var title =  req.body.title;
  var image = req.body.image;
  var newBook =  {title: title, image: image};
  books.push(newBook);
  res.redirect('/books');

});

app.get("/books/new",function(req,res){
  res.render("new");
});

var PORT = 5000 || process.env.PORT;

app.listen(PORT, process.env.IP, function(){
  console.log("bookdoer server started, listening to port " + PORT );
});
