var Workout = require('../models/workoutModel.js');
var bodyParser = require('body-parser');

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Username
    app.get('/api/workouts/:uname', function(req, res) {
        
        Workout.find({ username: req.params.uname }, 
        function(err, workout) {
            if (err) throw err;          
            res.send(workout);
        });      
    });

    //WorkoutID
    app.get('/api/workout/:id', function(req, res) {
       
       Workout.findById({ _id: req.params.id }, function(err, workout) 
       {
           if (err) throw err;
           
           res.send(workout);
       });
        
    });

    //sets up base data for testing
    app.get('/api/setupWorkout', function(req,res){
    var startWorkout = [
        {
            username: 'bguilder',
            workoutName: 'Bench',
            reps: 5,
            weight: 10
    }];
    Workout.create(startWorkout, 
    function(err,results){
        res.send(results);
    });
});

    
    app.post('/api/workout/edit',function(req,res){
     //updates a workout type if previous workout ID was found
        if (req.body.id){
            Workout.findByIdAndUpdate(req.body.id, {
              workoutName: req.body.workoutName,
              reps: req.body.reps,
              weight: req.body.weight,
              sets: req.body.sets,
              time: req.body.time,
              distance: req.body.time},
                function(err,workout){
                if (err) throw err;
                res.send('Workout Updated');
            })

        };
    });
        app.post('/api/workout/create',function(req,res){

        //posts a workout type if previous workout ID was not found
        
            var newWorkout = Workout({
                username:"test",
                workoutName: req.body.workoutName,
                sets: req.body.sets,
                reps: req.body.reps,
                weight: req.body.weight,
                time: req.body.time,
                distance: req.body.distance
            });
            newWorkout.save(function(err){
                if(err)throw err;
                res.send('New Workout Created');
            });
        });

    //deletes a workout
    app.delete('/api/workout/remove/:id', function(req, res) {
        console.log(req.params.id);
        Workout.findByIdAndRemove(req.params.id, function(err) {
            if (err) throw err;
            res.send('Workout Deleted');
        })
        
    });
}
