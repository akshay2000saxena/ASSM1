const request = require('request');
const cheerio = require('cheerio');

function scraper(url) {
    request(url, (error, response, html) => {
        if(!error && response.statusCode == 200) {
            console.log(html);
        }
    });
}