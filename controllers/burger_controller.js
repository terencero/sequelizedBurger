var express = require('express');

// Require models folder, which requires index.js by default; index.js will loop through all models with forEach and connect to mysql database
var db = require('../models');

var router = express.Router();

router.get('/', function(req, res) {
	db.Burger.findAll({}).then(function(dbPost){
		res.json(dbPost);
	});
});
router.post('/', function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name,
		devoured: req.body.devoured
	}).then(function(dbPost){
		res.json(dbPost);
	});
});

router.put('/', function(req, res) {
	db.Burger.update(req.body, 
	{
		where: {
			id: req.body.id
		}
	}).then(function(dbPost) {
		res.json(dbPost);
	});
});

module.exports = router;