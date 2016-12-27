var connection = require("./mysqlconnection.js");

var orm = {
    getCurrentUser: function(dataObject) {
		var email = dataObject.email;
		var name = dataObject.givenName + " " + dataObject.familyName;
        var queryString = "SELECT * FROM users WHERE email = ?";
        connection.query(queryString, email, function(err, result) {
			if (err) throw err;
            console.log("result", result);

            if (result.length === 0) {
                console.log("no record found for that email adrress. creating entry.");
				//orm.createUser(dataObject);
            } else {
				console.log(name + " is already registered. Logging in.");
				orm.logInUser(dataObject);
			}

        });
    },
    createUser: function(signUpDataObject) {
		var queryString = "INSERT INTO users (";
		var keyArray = [];
		var valuesArray = [];
		for (var key in signUpDataObject) {
			keyArray.push(key);
			valuesArray.push('"' + signUpDataObject[key] + '"');
		}
		keyArray.push("onlineStatus");
		valuesArray.push(true);
		queryString += keyArray.join() + ") ";
		queryString += "VALUES (" + valuesArray.join() + ");";
		connection.query(queryString, function(err, results) {
			if (err) throw err;
			console.log(results);
		});
    },
	logInUser: function(loginDataObject) {
		var queryString = "UPDATE users SET onlineStatus = true AND lastLogin = CURRENT_TIMESTAMP WHERE ?";
		var whereObject = {
				email: loginDataObject.email
		};
		connection.query(queryString, whereObject, function(err, results) {
			console.log(results);
		});
	},
	logOutUser: function(loginDataObject) {
		var queryString = "UPDATE users SET onlineStatus = false WHERE ?";
		var whereObject = {
				email: loginDataObject.email
		};
		connection.query(queryString, whereObject, function(err, results) {
			console.log(results);
		});
	},
	createGame: function(gameObject) {
		var queryString = "INSERT INTO games (";
		var keyArray = [];
		var valuesArray = [];
		for (var key in gameObject) {
			keyArray.push(key);
			valuesArray.push('"' + gameObject[key] + '"');
		}
		queryString += keyArray.join() + ") ";
		queryString += "VALUES (" + valuesArray.join() + ");";
		console.log(queryString);
		connection.query(queryString, function(err, results) {
			if (err) throw err;
			console.log(results);
		});

	},
};

module.exports = orm;
