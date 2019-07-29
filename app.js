var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("home.ejs")
});

app.get("/website", function(req, res) {
    res.render("website_pick.ejs")
});

app.get("/item", function(req, res) {
    res.render("item_pick.ejs")
});

app.listen(5000);