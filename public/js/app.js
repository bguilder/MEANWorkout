var app = angular.module('TestApp', []);

app.controller('mainController',['$scope', '$http', '$location',
function($scope, $http, $location){


		//changing to workout view

		
		//getting the data
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
	$scope.id = '';

    $scope.addWorkout = function () {
        //where your sending and what you are sending
        //if you had more you would just use a comma after newRule??
        $http.post('/api/workout', { workoutName: $scope.workoutName, 
									reps: $scope.reps, 
									weight: $scope.weight,
									id: $scope.id})

            .success(function (result) {

                $scope.workoutName = result.workoutName;
				$scope.reps = result.reps;
				$scope.weight = result.weight;
				$scope.id = result.id;

				$scope.reps = '';
				$scope.weight = '';
                $scope.workoutName = '';
				$scope.id = '';

            })
            .error(function (data, status) {

                console.log(data);

            });

    };



	$scope.deleteData = function () {

		var data = {
			id: $scope.id
		}

		//Call the service to delete data
		$http.delete('/api/workout/' , JSON.stringify(data))
		.success(function (result) {		
		$scope.msg = "Data Deleted Successfully!";
		})

        .error(function (data, status) {
    	     console.log(data);
      });
		
	};

}]);