var Workout = require('../models/workoutModel.js');
var bodyParser = require('body-parser');

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Username get all workouts
    app.get('/api/workouts/:uname', function(req, res) {
        
        Workout.find({ username: req.params.uname }, 
        function(err, workout) {
            if (err) throw err;          
            res.send(workout);   
    });
    });

    app.get('/api/timeTracker/:uname', function(req,res){
        TimeTracker.find({username: req.params.uname },
        function(err, timeTracker){
            if (err) throw err;
            res.send(timeTracker);
        });
    });
  


    app.post('/api/workout/createLifting',function(req,res){ 
            var newLifting = Workout({
                username:"test",
                workoutName: req.body.workoutName,
                date:req.body.date,
                reps: req.body.reps,
                weight: req.body.weight,
            });
            newLifting.save(function(err){
                if(err)throw err;
                res.send('New Lifting Workout Created');
            });
        });
    
    app.post('/api/workout/editLifting',function(req,res){
        if (req.body.id){
            Workout.findByIdAndUpdate(req.body.id, {
              workoutName: req.body.workoutName,
              reps: req.body.reps,
              weight: req.body.weight},
                function(err,workout){
                if (err) throw err;
                res.send('Lifting Workout Updated');
            })
        };
    });

    app.post('/api/workout/createCardio',function(req,res){
            var newCardio = Workout({
                username:"test",
                workoutName: req.body.workoutName,
                distance: req.body.distance,
                time: req.body.time,
                reps: req.body.reps
            });
            newCardio.save(function(err){
                if(err)throw err;
                res.send('New Cardio Workout Created');
            });
        });

    app.post('/api/workout/editCardio',function(req,res){
        if (req.body.id){
            Workout.findByIdAndUpdate(req.body.id, {
              workoutName: req.body.workoutName,
              distance: req.body.distance,
              time: req.body.time,
              reps: req.body.reps},
                function(err,workout){
                if (err) throw err;
                res.send('Cardio Workout Updated');
            })
        };
    });

   /* app.post('/api/workout/createTimes',function(req,res){
        var newTimes = Workout({
                username: "test",
                runningTime: req.body.runningTime,
                liftingTime: req.body.liftingTime,
                stretchTime: req.body.stretchTime,
                coreTime: req.body.coreTime
            });
            newTimes.save(function(err){
                if(err)throw err;
                res.send('New Time Tracker Created');
            });
    });
    
    app.post('/api/workout/editTimes', function(req,res){
        if (req.body.id){
            Workout.findByIdAndUpdate(req.body.id, {
              runningTime: req.body.runningTime,
              liftingTime: req.body.liftingTime,
              stretchTime: req.body.stretchTime,
              coreTime: req.body.coreTime},
                function(err,workout){
                if (err) throw err;
                res.send('Running Workout Updated');
            })
        };
    })*/

    //deletes a workout
    app.delete('/api/workout/remove/:id', function(req, res) {
        console.log(req.params.id);
        Workout.findByIdAndRemove(req.params.id, function(err) {
            if (err) throw err;
            res.send('Workout Deleted');
        })      
    });

    


}
