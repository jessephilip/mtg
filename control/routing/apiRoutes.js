// import express
var express = require("express");
var app = express();

// import path
var path = require("path");

// import orm
var orm = require("../orm.js");

module.exports = function (app) {

    app.post("/login", function(req, res) {
		var info = req.body;
		console.log("info-login", info);
		orm.getCurrentUser(info);

		// have to send a response to complete ajax call
		res.send("Post complete.");

    });

	app.post("/createGame", function(req, res) {
		var info = req.body;
		console.log("info-createGame", info);
		orm.createGame(info);

		// have to send a response to complete ajax call
		res.send("Post complete.");

    });

};
