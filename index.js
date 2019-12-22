var express = require("express");
 
var app = express();
 
app.use(express.static(__dirname + "/public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
 
app.listen(3000);

app.get("/", function(request, response) {
    response.render("index");
});

app.get("/landing", function(request, response){
    response.render("landing");
});
 
app.get("/hanoi/month", function(request, response)  {
    
    response.render("month");
});
 
app.get("/hanoi", function(request, response)  {
    
    response.render("city");
});