angular.module('wishlists').controller('logInPageCtrl', ['$scope', 'Auth', '$location', 'SessionStorage', '$http',
	function($scope, Auth, $location, SessionStorage, $http) {

	// $http.get('http://localhost:5000/users')
	// 	.success(function(data) {
	// 		console.log(data);
	// 	});
	
	console.log('login');
	
	$scope.showLoginForm = true;

	$scope.toggleLogInClass = function() {
		$scope.showLoginForm = !$scope.showLoginForm;
	},
	$scope.submitLogIn = function(form) {
		if(form.$valid) {
			$http.post('http://localhost:5000/user/checkValidUser', {username: $scope.username, password: $scope.password})
				.success(function(data, status, headers, config) {
					Auth.setUser(data);
					$scope.logUserIn();
				  })
				.error(function(data, status, headers, config) {
					console.log('failed to log');
				  });
		}
	},
	$scope.submitRegister = function(form) {
		if(form.$valid) {
			console.log('register');
			console.log($scope);
			console.log($scope.registerFirstName);
			console.log($scope.registerSecondName);
			console.log($scope.registerUsername);
			console.log($scope.registerEmail);
			console.log($scope.registerPassword);
			//save user information
			Auth.setUser({
				username: $scope.registerUsername,
				firstname: $scope.registerFirstName,
				lastname: $scope.registerSecondName,
				email: $scope.registerEmail,
				password: $scope.registerPassword
			});
			Auth.setNewUser(true);
			$location.path('/home');
		}
	},
    $scope.changeLogInFormInput = function(element) {
		if($scope.checkFormInputTextValue(element)) {
			element.className = "used";
		} else {
			element.className = "";
		}
	},
	$scope.checkFormInputTextValue = function(element) {
		if(element.value) {
			return true;
		} else {
			return false;
		}
	},
	$scope.onchange = function(element) {
		$scope.changeLogInFormInput(element);
	},
	$scope.logUserIn = function() {
		$location.path('/home');
	}
}]);
