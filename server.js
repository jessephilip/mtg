// import express server
var express = require("express");
var app = express();

// import path
var path = require("path");

// import body-parser
var bodyParser = require("body-parser");

// prepare static files for use by the front-end
app.use(express.static("./views/assets"));

//use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// import routers
require("./control/routing/htmlRoutes.js")(app);
require("./control/routing/apiRoutes.js")(app);

// set up port
var PORT = process.env.PORT || 8080;

// import config.js
// var config = require("./control/config.js");

// set up server
app.listen(PORT, function() {
    console.log("MTG Helper listening on http://localhost:" + PORT);
});
