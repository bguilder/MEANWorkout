var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    username: String,
    date: { type: Date, default: Date.now },
    workoutName: String,
    reps: Number,
    weight: Number,
    distance: Number,
    time: String,
    runningTime: String,
    liftingTime: String,
    coreTime: String,
    stretchTime: String
});

var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
