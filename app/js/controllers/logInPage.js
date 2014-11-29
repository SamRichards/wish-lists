angular.module('homepageLogInCheck').controller('logInPage', function($scope, user) {
	
	$scope.username = user.username,
	$scope.password = user.password,
	$scope.registerUsername = "", $scope.registerEmail = "", $scope.registerPassword = "", $scope.registerPoop = "",

	$scope.showLoginForm = true,
	$scope.toggleLogInClass = function() {
		this.showLoginForm = !this.showLoginForm;
	},
	$scope.submitLogIn = function() {
		console.log('submit log in');
		console.log($scope.username);
		console.log($scope.password);
	}, 
	$scope.submitRegister = function() {
		console.log('register');
		console.log($scope);
		console.log($scope.registerUsername);
		console.log($scope.registerEmail);
		console.log($scope.registerPassword);
	}
});