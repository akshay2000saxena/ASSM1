var express = require("express");
var app = express();
const request = require('request');
const cheerio = require('cheerio');
var http = require("http");
var getJSON = require('get-json');

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

    app.set('web1', web1);
    app.set('web2', web2);
    app.set('web3', web3);

    res.render("item_pick.ejs");
});


app.get("/display", function(req, res) {
    var item = req.query.item;

    app.set('item', item);

    var web1 = app.get('web1');
    var web2 = app.get('web2');
    var web3 = app.get('web3');

    var item_split = item.split(" ");
    var item_join = item_split.join('+');

    var results_1 = [];
    
    for(var i = 0; i < 9; ++i) {
        var result_page = 1 + (10 * i);
        var result_url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBYNIX9fQ2730Bs9OSxqNnw8yasVUcfH9c&cx=016991028233952270186:saqsw3bd9nq&num=10&siteSearch='+ web1 +'&siteSearchFilter=i&q='+ item_join +'&start=' + result_page;

        getJSON(result_url, function (error, response) {
            app.set('json', response);
        });

        res.send(json);
        break;

        for(var i = 0; i < 9; ++i) {

            var result_item = json['items'][i];
            
            results_1.push([result_item['title'], result_item['link'], result_item['cse_image']['src']]);
        }
        
    }

});

app.listen(5000);