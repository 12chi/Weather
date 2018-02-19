// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// use json
app.use(bodyParser.json());

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/dist')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));


app.get('/', function(req, res) {
    console.log("enter get")
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(4200, function() {
    console.log("Weather listening on port 4200");
})
