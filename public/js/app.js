var app = angular.module('TestApp', []);

app.controller('mainController',['$scope', '$http', '$location',
function($scope, $http, $location){


		//changing to workout view

		
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
            })
            .error(function (data, status) {
                console.log(data);
            });
    };


	$scope.id = '';

	$scope.deleteData = function () {

		console.log(JSON.stringify({id: $scope.id}));
		
		//Call the service to delete data
		$http.delete('/api/workout/remove/'+$scope.id)
		.success(function (result) {					
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