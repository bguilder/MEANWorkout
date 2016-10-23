var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController')
var app = express();

app.set('port', (process.env.PORT || 3000));

mongoose.connect(config.getDbConnectionString());
apiController(app);
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.render('index');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});