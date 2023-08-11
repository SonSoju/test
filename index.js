var express = require("express");

var app = express();


app.listen(3001);

app.get("/", function(req, res)  {
   
    res.send("12")
});
app.get("/abc", function(req, res)  {
   
    res.send("1231313")
});
