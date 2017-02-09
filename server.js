var express = require('express')
const googleIms = require('google-ims');

var api = process.env.GOOGLE_API
var sid = process.env.GOOGLE_SID

var client = googleIms(sid, api);


var executeSearch = function(searchString, page){
   
}

var app = express()
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/api/imagesearch/:search', function (req, res) {
   if(req.query.offset !== undefined){
       var page = req.query.offset / 10
   }
   else
   {
       page = 0;
   }
   console.log(page)
   var searchString = req.params.search
   console.log(searchString);
   client.search(req.params.search, {
        page: page, // 10 results per page 
    }).then(function (images) {
        
        res.setHeader('Content-Type', 'application/json')
        var resultList = [];
        images.forEach(function(i, e, a) {
            var result = { url: i.url }
            resultList.push(result)
        });
        res.send(JSON.stringify(resultList))
        res.end()
        
    });
})

app.listen(port, function () {
  console.log('App listening on port '+port)
})
