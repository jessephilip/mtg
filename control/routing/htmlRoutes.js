// import express
var express = require("express");
var app = express();

// import path
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        var location = __dirname + "/../../views/mtg.html";
        res.sendFile(path.join(location));
    });

};
