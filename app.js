var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController')
var app = express();

var port = 3000;

mongoose.connect(config.getDbConnectionString());
apiController(app);
app.set('view engine', 'ejs');

app.get('/api/workout',function(req,res){
    res.render('index');
})

app.listen(port);
