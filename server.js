var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./models');

// Set handlebars
var exphbs = require('express-handlebars');

var app = express();
var PORT  = process.env.PORT || 8080;

// middleware
// Serve/route to static content
app.use(express.static(process.cwd() + '/public'));

// interpret data as json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Override post method on handlebars.js with ?_method=put
app.use(methodOverride('_method'));

// use handlebars and set the defaul layout as main.js
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import router and assign to routes
var routes = require('./controllers/burger_controller.js');

// use the get/post/update routes in burger_controller.js
app.use('/', routes);

// sync database; sequelize.sync({}) empty object so that the database does not get overridden
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


