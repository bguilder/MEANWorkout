var app = angular.module('TestApp', []);


app.controller('mainController',['$scope', '$http', '$location', '$window',
function($scope, $http, $location, $window){

		$scope.searchWorkouts = '';
   		$scope.workoutName = '';
		$scope.reps = '';
		$scope.weight = '';
		$scope.distance = '';
		$scope.time = '';
		$scope.id = '';
		$scope.validTime = '';

		$scope.liftingCreateForm = false;
		$scope.liftingEditForm = false;
		$scope.runningCreateForm = false;
		$scope.runningEditForm = false;	
		$scope.workoutSortTable = false;
		$scope.runningTable = false;
		$scope.workoutButtons = false;
		$scope.newLiftingForm = false;

		//simple toggle method
		$scope.toggleLiftingCreate = function(x) {
			if(x == 1){
				$scope.workoutName = "Bench";
			}
			else if(x == 2){
				$scope.workoutName = "Squat";
			}
			else if(x == 3){
				$scope.workoutName = "Curls";
			}	
       			 $scope.liftingCreateForm = ! $scope.liftingCreateForm;
		}

		$scope.toggleLiftingButtons = function(){
			$scope.workoutButtons = ! $scope.workoutButtons;
		}
		$scope.toggleLiftingEdit = function(x){
				$scope.id = x;
			$scope.liftingEditForm = ! $scope.liftingEditForm;
		}
		$scope.toggleRunningCreate = function(){
				$scope.runningCreateForm = ! $scope.runningCreateForm;
		}
		$scope.toggleRunningEdit = function(x){
			$scope.id = x;
				$scope.runningEditForm = ! $scope.runningEditForm;
		}
		$scope.toggleWorkoutSort = function(){
			$scope.workoutSortTable = ! $scope.workoutSortTable;
		}
		$scope.toggleRunningTable = function(){
			$scope.runningTable = ! $scope.toggleRunningTable;
		}
		$scope.toggleLiftingCreateNew() = function(){
			$scope.newLiftingForm = $scope.newLiftingForm;
		}
	
		$http.get('/api/workouts/test')
			.success(function(result){
				$scope.workouts = result;
			})
		    .error(function(data,status){
				console.log('error!');
				console.log(data);
			});

    $scope.createLiftingWorkout = function () {

		$http.post('/api/workout/createLifting', { workoutName: $scope.workoutName, 
											reps: $scope.reps, 
											weight: $scope.weight,
									})
            .success(function (result) {
                $scope.msg="Success";
				$window.location.reload();
            })
            .error(function (data, status) {
                console.log(data);
            });
		};
	
		$scope.createLiftingWorkout = function () {
			$http.post('/api/workout/createLifting', { workoutName: $scope.workoutName, 
										reps: $scope.reps, 
										weight: $scope.weight,
								})
		.success(function (result) {
			$scope.msg="Success";
			$window.location.reload();
		})
		.error(function (data, status) {
			console.log(data);
		});
	};

		$scope.editLiftingWorkout = function(){
			$http.post('/api/workout/editLifting', {workoutName: $scope.workoutName, 
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

		$scope.createRunningWorkout = function(){

			if($scope.validTime === "valid"){
			$scope.workoutName = "Run";
			$http.post('/api/workout/createRunning', { workoutName: $scope.workoutName, 
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
				window.alert("Enter(hh:mm:ss)")
			}
		}

		$scope.editRunningWorkout = function(){
			$http.post('/api/workout/editRunning', {workoutName: $scope.workoutName, 
									distance: $scope.distance, 
									time: $scope.time,
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

		$scope.createTime = function(){

			if($scope.validTime === "valid"){
			
			$http.post('/api/workout/createRunning', { workoutName: $scope.workoutName, 
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
				window.alert("Enter(hh:mm:ss)")
			}
		}

		$scope.editTime = function(){
			$http.post('/api/workout/editRunning', {workoutName: $scope.workoutName, 
									distance: $scope.distance, 
									time: $scope.time,
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

		
	//Deletes Workout
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
    
	$scope.validateTime = function(x){

		var regex = /^([0-9]:)?[0-5]?[0-9]:[0-5][0-9]$/;
		if(x.match(regex)){
			$scope.validTime = "valid";
		}
		else{
			$scope.validTime = "invalid";
		}
	}



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
	
			//getting the data
}]);