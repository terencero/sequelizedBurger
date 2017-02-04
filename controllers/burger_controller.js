var express = require('express');

// Require models folder, which requires index.js by default; index.js will loop through all models with forEach and connect to mysql database
var db = require('../models');
// assign express to router function to export one "router" file with all route paths
var router = express.Router();

// promise to select all the burgers, then return the data, store in object and render object on index 
router.get('/', function(req, res) {
	db.Burger.findAll({}).then(function(dbPost){
		var hbsObject = {
			Burgers: dbPost
		};
		res.render('index', hbsObject);
	});
});

// post route; create a new burger upon hitting submit button, then redirect to index with updated data
router.post('/', function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name,
		devoured: req.body.devoured
	}).then(function(dbPost) {
		res.redirect('/');
	});
});

// put route to update burger devoured value upon devour btn click; used method override to reroute from method=post on handelbars index.js
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
// export all the routes
module.exports = router;