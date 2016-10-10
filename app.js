var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController')
var app = express();

var port = 3000;

mongoose.connect(config.getDbConnectionString());
apiController(app);


app.listen(port);
