angular.module('wishlists').controller('homepage', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
	
	user = Auth.getUser(),
	
	$scope.getName = function() {
		return user.firstname.capitalize() + ' ' + user.lastname.capitalize();
	}
	
}]);