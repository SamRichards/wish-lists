angular.module('wishlists').controller('homepage', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
	
	console.log(Auth);
	console.log($scope);
	console.log(Auth.getUser()),

	user = Auth.getUser(),

	$scope.getName = function() {
		return user.firstname.capitalize() + ' ' + user.lastname.capitalize();
	}
	
}]);