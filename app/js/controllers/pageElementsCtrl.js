angular.module('wishlists').controller('pageElementsCtrl', ['$scope', 'Auth', '$location', 'RoutingService', 'SessionStorage',
	function($scope, Auth, $location, RoutingService, SessionStorage) {

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
	},
	$scope.openMenu = function($event) {
		var parent = angular.element($event.target).parent();
		parent.hasClass('active') ? parent.removeClass('active') : parent.addClass('active');
		$event.preventDefault();
	},
	$scope.logOut = function($event) {
       	//don't know if angular js has a way to find the parent
       	var parent = angular.element($event.target).parent().parent().parent();
       	parent.removeClass('active');
       	SessionStorage.removeUser();
       	Auth.logOut();
       	$location.path('/login');
	}
}]);
