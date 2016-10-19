var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var timeTrackerSchema = new Schema({
    username: String,
    running: String,
    lifting: String,
    stretch: String,
    core: String
});

var TimeTracker = mongoose.model('TimeTracker', timeTrackerSchema);

module.exports = TimeTracker;