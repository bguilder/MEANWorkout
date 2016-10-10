var Workout = require('../models/workoutModel.js');

module.exports = function(app){
    
app.get('/api/setupWorkout', function(req,res){

    var startWorkout = [
        {
            username: 'bguilder',
            workout: 'Bench',
            reps: 5,
            weight: 10
    } 
    ];
    Workout.create(startWorkout, function(err,results){
        res.send(results);
    });

});
}