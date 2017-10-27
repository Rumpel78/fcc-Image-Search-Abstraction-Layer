# FreeCodeCamp API Projects

## Image Search Abstraction Layer

* **Objective**:  Build a full stack JavaScript app that allows you to search for images like this: <https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10> and browse recent search queries like this: <https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/>. Then deploy it to Heroku.
* **User Story**: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* **User Story**: I can paginate through the responses by adding a ?offset=2 parameter to the URL.
* **User Story**: I can get a list of the most recently submitted search strings.

### To run this app with docker:
* Build image: `docker build -t rumpel78/imagesearch .`
* Run container: `docker run -p8080:8080 --name fcc_imagesearch -e "GOOGLE_API=<YOUR GOOGLE API KEY>" -e "GOOGLE_SID=<YOUR GOOGLE SID>" rumpel78/imagesearch`  
Don't forget to proivde your custom google api key & sid!
* Open in browser: http://localhost:8080
* To remove the container run: `docker rm fcc_imagesearch -f`

### To run this app with nodejs and without docker:
* Enter source directory: `cd src`
* Install packages: `npm install`

* Start nodjs server: `GOOGLE_API=<YOUR GOOGLE API KEY> GOOGLE_SID=<YOUR GOOGLE SID> node server.js`  
Don't forget to proivde your custom google api key & sid!
* Open in browser: http://localhost:8080

See the result under: https://imagesearch.app.rzipa.at/  
To take a look at the other projects go to https://app.rzipa.at
