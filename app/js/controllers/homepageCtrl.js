angular.module('wishlists').controller('homepageCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
	
	user = Auth.getUser(),

	$scope.getName = function() {
		if(user) {
			return user.firstname.capitalize() + ' ' + user.lastname.capitalize();
		} else {
			return false;
		}
	}
	
}]);