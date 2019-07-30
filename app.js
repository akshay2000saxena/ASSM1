var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/website", function(req, res) {
    res.render("website_pick.ejs");
});

app.get("/item", function(req, res) {
    var web1 = req.query.web1;
    var web2 = req.query.web2;
    var web3 = req.query.web3;

    if(web2 == undefined) {
        web2 = '';
    }

    if(web3 == undefined) {
        web3 = '';
    }

    res.render("item_pick.ejs", {web1: web1, web2: web2, web3: web3});
});

app.get("/display", function(req, res) {
    var item = req.query.item;
    res.send(item);
});

app.listen(5000);