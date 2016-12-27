var mysql      = require('mysql');
var keys = require("../keys.js");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : keys.password,
  database: 'mtg_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
