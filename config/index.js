var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb://' + configValues.username + 
        ':' + configValues.pwd + 
        '@ds053156.mlab.com:53156/workout';
    }
}