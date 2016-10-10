var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    username: String,
    workout: String,
    reps: Number,
    weight: Number
});

var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
