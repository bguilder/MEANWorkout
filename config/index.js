var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        console.log('connected');
        return 'mongodb://' + configValues.username + 
        ':' + configValues.pwd + 
        '@ds053156.mlab.com:53156/workout';
    }
}