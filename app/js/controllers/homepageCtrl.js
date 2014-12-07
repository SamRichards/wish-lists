angular.module('wishlists').controller('homepageCtrl', ['$scope', 'Auth', '$location', 'SessionStorage',
	function($scope, Auth, $location, SessionStorage) {

	user = Auth.getUser(),

	$scope.getName = function() {
		if(user) {
			return Auth.getUserFullName();
		} else {
			return false;
		}
	}

}]);
