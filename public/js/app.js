//sets up an angular module
//the array would be an array of other modules this 
//angular depends on like require
angular.module('TestApp', []);

//adds a controller to this function
angular.module('TestApp')
	.controller('MainController', ctrlFunc);
	
function ctrlFunc() {
	this.message = "Hello";
	
	this.people = [
		{
			name: 'John Doe'
		},
		{
			name: 'Jane Doe'
		},
		{
			name: 'Jim Doe'
		}
	]
}