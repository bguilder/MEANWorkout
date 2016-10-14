var app = angular.module('TestApp', []);

app.controller('mainController',['$scope', '$http',
function($scope, $http){


		$http.get('/api/workout/test')
		
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
									weight: $scope.weight })

            .success(function (result) {

                $scope.workoutName = result.workoutName;
				$scope.reps = result.reps;
				$scope.weight = result.weight;

				$scope.reps = '';
				$scope.weight = '';
                $scope.workoutName = '';

            })
            .error(function (data, status) {

                console.log(data);

            });

    };
		//$scope.ID = '';
  
/*	$scope.deleteWorkout = function(id){

		$http.delete('/api/workout/' + id )
			.success(function(result){
			console.log(deleted!);
			})
			.error(function(data,status){
				console.log(data);
			});
	};*/

}]);