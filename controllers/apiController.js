var Workout = require('../models/workoutModel.js');
var bodyParser = require('body-parser');

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/workout/:username', function(req, res) {
        
        Workout.find({ username: req.params.username }, 
        function(err, workout) {
            if (err) throw err;
            
            res.send(workout);
        });
        
    });

    app.get('/api/workout/:id', function(req, res) {
       
       Workout.findById({ _id: req.params.id }, 
       function(err, workout) {
           if (err) throw err;
           
           res.send(workout);
       });
        
    });

app.get('/api/setupWorkout', function(req,res){

    var startWorkout = [
        {
            username: 'bguilder',
            workout: 'Bench',
            reps: 5,
            weight: 10
    } 
    ];
    Workout.create(startWorkout, 
    function(err,results){
        res.send(results);
    });

});

app.post('/api/workout',function(req,res){
    if (req.body.id){
        Workout.findByIdAndUpdate(req.body.id, {
            workout: req.body.workout,
            reps: req.body.reps,
            weight: req.body.weight},
                function(err,workout){
                if (err) throw err;
                res.send('Workout Updated');
            })

        }
        else{
            var newWorkout = Workout({
                username:"test",
                workout: req.body.workout,
                reps: req.body.reps,
                weight: req.body.weight
            });
            newWorkout.save(function(err){
                if(err)throw err;
                res.send('New Workout Created');
            });
        }
})

app.delete('/api/workout', function(req, res) {
        
        Workout.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Workout Deleted');
        })
        
    });
}
