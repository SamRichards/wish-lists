angular.module('wishlists').controller('pageElementsCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
	
	user = Auth.getUser(),
	console.log($scope);
	$scope.isLoggedIn = function() {
		return Auth.isLoggedIn();
	},
	$scope.getName = function() {
		return user.firstname.capitalize() + ' ' + user.lastname.capitalize();
	}
}]);