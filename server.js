// server.js starts the node application

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// app.use('//stylesheets', express.static(path.join(__dirname + '/stylesheets')));
// app.use(express.static(path.join(__dirname, 'src')));

app.set('port', (8080));

app.get("/", function(req, res){
    // res.send("welcome to the homepage");
    res.sendFile(__dirname + "/routes/home.html");
});

app.get("/projects", function(req, res){
    // res.send("welcome to the homepage");
    res.sendFile(__dirname + "/routes/projects.html");
});

app.get('/omar', function(req, res){
    res.sendFile(__dirname + "/routes/hometwo.html");
});

    app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
      });