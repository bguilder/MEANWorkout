var app = angular.module('TestApp', []);

app.controller('mainController',['$scope', '$http', '$location', '$window',
function($scope, $http, $location, $window){


		$scope.toggleCreate = false;
		$scope.toggleDelete = false;
		$scope.toggleEdit = false;
		//simple toggle method
		$scope.toggle = function(x) {
			if(x===1){
       			 $scope.toggleCreate = ! $scope.toggleCreate;
			}
			else if(x===2){
				$scope.toggleEdit = ! $scope.toggleEdit;
			}
			else if(x===3){
				$scope.toggleDelete = ! $scope.toggleDelete;
			}
    };
		
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
	
    $scope.addWorkout = function () {
        //where your sending and what you are sending
        //if you had more you would just use a comma after newRule??
        $http.post('/api/workout', { workoutName: $scope.workoutName, 
									reps: $scope.reps, 
									weight: $scope.weight
									})

            .success(function (result) {
                $scope.msg="yoooo";
		//		$window.location.reload();
            })
            .error(function (data, status) {
                console.log(data);
            });
    };

	$scope.editWorkout = function() {

		console.log(JSON.stringify({_id: $scope.id}));

		$http.post('/api/workout', {workoutName: $scope.workoutName, 
									reps: $scope.reps, 
									weight: $scope.weight,
									_id: $scope.id})
           .success(function (result) {
                $scope.msg="updated";
		//		$window.location.reload();
            })
            .error(function (data, status) {
                console.log(data);
            });
	}



	$scope.id = '';

	$scope.deleteData = function () {

		console.log(JSON.stringify({_id: $scope.id}));
		
		//Call the service to delete data
		$http.delete('/api/workout/remove/'+$scope.id)
		.success(function (result) {
	//		$window.location.reload();					
			$scope.msg = "Data Deleted Successfully!";
		})
        .error(function (data, status) {
    	     console.log(data);
      });		
	};

	$scope.findData = function(id){

		//JSON.stringify({id: $scope.id});
		console.log(JSON.stringify({id: $scope.id}));
	}
}]);