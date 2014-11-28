angular.module('homepageLogInCheck').controller('logInPage', function($scope, user) {
	
	$scope.username = user.username,

	$scope.showLoginForm = true,
	$scope.toggleLogInClass = function($scope) {
		this.showLoginForm = !this.showLoginForm;
	}
});