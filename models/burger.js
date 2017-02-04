// export the burger table model
module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define('Burger', {
		id: {
			type: DataTypes.INTEGER,
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
			// make the default value false to ensure burger is not devoured upon creating a new burger
			defaultValue: false
		}
	});
	// return the model to be available to access when imported in burger_controller
	return Burger;
};
