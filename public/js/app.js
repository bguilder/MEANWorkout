var app = angular.module('TestApp', []);


app.controller('mainController',['$scope', '$http', '$location', '$window',
function($scope, $http, $location, $window){


		$scope.toggleWorkoutCreate = false;
		$scope.toggleRunCreate = false;
		$scope.toggleWorkoutEdit = false;
		
		//simple toggle method
		$scope.toggle = function(x) {
			if(x===1){
       			 $scope.toggleWorkoutCreate = ! $scope.toggleWorkoutCreate;
			}
			if(x===2){
				$scope.toggleWorkoutEdit = ! $scope.toggleWorkoutEdit;
			}
			else if(x===3){
				$scope.toggleRunCreate = ! $scope.toggleRunCreate;
			}
    };

		$scope.editWorkout = function(x){
			$scope.id = x;
			$http.post('/api/workout/edit', {workoutName: $scope.workoutName, 
									reps: $scope.reps, 
									weight: $scope.weight,
									id: $scope.id
									})
           .success(function (result) {
                $scope.msg="updated";
				$window.location.reload();
            })
            .error(function (data, status) {
                console.log(data);
            });

		}
		
		//getting the data
		$http.get('/api/workouts/test')
		
			.success(function(result){

				$scope.workouts = result;
			})

		    .error(function(data,status){

				console.log('error!');
				console.log(data);
			});
		
    $scope.workoutName = '';
	$scope.reps = '';
	$scope.weight = '';
	$scope.sets = '';
	$scope.distance = '';
	$scope.time = '';
	$scope.id = '';

    $scope.addWorkout = function (x) {
        //where your sending and what you are sending
        //if you had more you would just use a comma after newRule??
		if(x===1){
			console.log('inside run');
			$scope.workoutName = "Run";
			$http.post('/api/workout/create', { workoutName: $scope.workoutName, 
											reps: $scope.reps, 
											weight: $scope.weight,
											sets: $scope.sets,
											distance: $scope.distance,
											time: $scope.time
									})
            .success(function (result) {
                $scope.msg="Success";
				$window.location.reload();
            })
            .error(function (data, status) {
                console.log(data);
            });
		}
		else{
			console.log('inside else');
			$http.post('/api/workout/create', { workoutName: $scope.workoutName, 
											reps: $scope.reps, 
											weight: $scope.weight,
											sets: $scope.sets,
											distance: $scope.distance,
											time: $scope.time
									})
            .success(function (result) {
                $scope.msg="Success";
				$window.location.reload();
            })
            .error(function (data, status) {
                console.log(data);
            });
		}
			
    };

	/*$scope.editWorkout = function() {

		$http.post('/api/workout/edit', {workoutName: $scope.workoutName, 
									reps: $scope.reps, 
									weight: $scope.weight,
									id: $scope.id
									})
           .success(function (result) {
                $scope.msg="updated";
				$window.location.reload();
            })
            .error(function (data, status) {
                console.log(data);
            });
	};*/

	/*$scope.deleteData = function () {

		//console.log(JSON.stringify({_id: $scope.id}));
		
		//Call the service to delete data
		$http.delete('/api/workout/remove/'+$scope.id)
		.success(function (result) {
			$window.location.reload();					
			$scope.msg = "Data Deleted Successfully!";
		})
        .error(function (data, status) {
    	     console.log(data);
      });		
	};
	/*$scope.findData = function(id){
		//JSON.stringify({id: $scope.id});
		console.log(JSON.stringify({id: $scope.id}));		
	}*/
	
	$scope.deleteClick = function(x){
		$http.delete('/api/workout/remove/'+x)
		.success(function (result) {
			$window.location.reload();					
			$scope.msg = "Data Deleted Successfully!";
		})
        .error(function (data, status) {
    	     console.log(data);
      });		
	};
}]);