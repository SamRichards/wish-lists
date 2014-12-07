angular.module('wishlists').controller('pageElementsCtrl', ['$scope', 'Auth', '$location', 'RoutingService',
	function($scope, Auth, $location, RoutingService) {

	user = Auth.getUser(), currentPage = RoutingService.getPath(),

	$scope.userLoggedIn = function() {
		return Auth.isLoggedIn();
	},
	$scope.getName = function() {
		return user.firstname.capitalize() + ' ' + user.lastname.capitalize();
	},
	$scope.getCurrentPage = function() {
		return RoutingService.getPath();
	},
	$scope.isNewUser = function() {
		return Auth.isNewUser();
	},
	$scope.getFirstName = function() {
		return user.firstname.capitalize();
	}
}]);