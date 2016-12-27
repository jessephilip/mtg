var Sequelize = require("sequelize");
var connection = require("../control/config.js");

var Users = connection.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    user_name: {
        type: DataTypes.STRING,
    },
    user_email: {
        type: DataTypes.STRING,
    },
    user_password: {
        type: DataTypes.STRING,
    },
    user_photo: {
        type: DataTypes.STRING,
    },
    user_decks: {
        type: DataTypes.STRING,
    },
    user_activeDeck: {
        type: DataTypes.STRING,
    },
    user_life: {
        type: DataTypes.INTEGER,
    }
});

Users.sync();

module.exports = Users;
