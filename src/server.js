var express = require('express')
var https = require('https')
var request = require("request")

var api = process.env.GOOGLE_API
var sid = process.env.GOOGLE_SID
var googleUrl = "https://www.googleapis.com/customsearch/v1?cx=" + sid + "&key=" + api + "&searchType=image&num=10&q=";

var app = express()
var port = process.env.PORT || 8080;
var requests = []

app.use(express.static('public'));

app.set('view engine', 'pug');

var mainRouter = express.Router();
var basePath = process.env.BASEPATH || '';
app.use(basePath, mainRouter);

mainRouter.get('/', function (req, res) {
    var baseUrl = req.protocol + '://' + req.hostname;
    res.render('index', { baseUrl, basePath });
});

mainRouter.get('/api/imagesearch/latest', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    var result = JSON.stringify(requests)
    res.send(result)
})

mainRouter.get('/api/imagesearch/:search', function (req, res) {
    if (req.query.offset !== undefined) {
        var page = +req.query.offset + 1
    }
    else {
        page = 0;
    }
    var searchString = req.params.search
    // Add search history
    requests.push({ term: searchString, when: new Date() });
    if (requests.length > 10) {
        requests.pop();
    }
    //Search
    var search = googleUrl + searchString
    if (page > 0) {
        search = search + "&start=" + page
    }
    request(search, function (error, response, body) {
        res.setHeader('Content-Type', 'application/json')
        var results = JSON.parse(body)
        var responseImages = []
        results.items.forEach(item => {
            var result = {
                url: item.link,
                snippet: item.snippet,
                thumbnail: item.image.thumbnailLink,
                context: item.image.contextLink
            }
            responseImages.push(result)
        })
        var resultJson = JSON.stringify(responseImages)
        res.send(resultJson)
    });
})

app.listen(port, function () {
    console.log('App listening on port ' + port)
})
