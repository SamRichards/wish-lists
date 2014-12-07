angular.module('wishlists').controller('homepageCtrl', ['$scope', 'Auth', '$location', 'SessionStorage',
	function($scope, Auth, $location, SessionStorage) {
	
	user = Auth.getUser(),

	//console.log(SessionStorage.getLocalStorageJson('user'));

	$scope.getName = function() {
		if(user) {
			return user.firstname.capitalize() + ' ' + user.lastname.capitalize();
		} else {
			return false;
		}
	}
	
}]);