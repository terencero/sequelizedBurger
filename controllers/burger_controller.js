var express = require('express');

// Require models folder, which requires index.js by default; index.js will loop through all models with forEach and connect to mysql database
var db = require('../models');

var router = express.Router();

router.get('/', function(req, res) {
	db.Burger.findAll({}).then(function(dbPost){
		var hbsObject = {
			Burgers: dbPost
		};
		res.render('index', hbsObject);
	});
});

router.post('/', function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name
		// devoured: req.body.devoured
	}).then(function(dbPost) {
		res.redirect('/');
	});
});

router.put('/:id', function(req, res) {
	db.Burger.update({devoured: 1}, 
	{
		where: {
			id: req.params.id
		}
	}).then(function(dbPost) {
		res.redirect('/');
	});
});

module.exports = router;