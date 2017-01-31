// Require models folder, which requires index.js by default; index.js will loop through all models with forEach and connect to mysql database
var db = require('../models');

module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define('Burger', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
	
		burger_name: { 
			type: DataTypes.STRING, 
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: { 
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	return Burger;
};
