angular.module('wishlists').controller('logInPageCtrl', ['$scope', 'Auth', '$location', 'SessionStorage', '$http', 'RoutingService',
	function($scope, Auth, $location, SessionStorage, $http, RoutingService) {

	// $http.get('http://localhost:5000/users')
	// 	.success(function(data) {
	// 		console.log(data);
	// 	});
	
	$scope.showLoginForm = true;

	$scope.toggleLogInClass = function() {
		$scope.showLoginForm = !$scope.showLoginForm;
	},
	$scope.submitLogIn = function(form) {
		if(form.$valid) {
			console.log(RoutingService.serverUrl);
			$http.post(RoutingService.serverUrl + '/user/checkValidUser', {username: $scope.username, password: $scope.password})
				.success(function(data, status) {
					console.log(data);
					Auth.setUser(data);
					$scope.logUserIn();
				  })
				.error(function(data, status) {
					//should have an invalid log in details thing.
					$scope.logFormInvalid = true;
				  });
		}
	},
	$scope.submitRegister = function(form) {
		if(form.$valid) {
			$http.post(RoutingService.serverUrl + '/user/register', {
				username: $scope.registerUsername,
				firstname: $scope.registerFirstName,
				lastname: $scope.registerSecondName,
				email: $scope.registerEmail,
				password: $scope.registerPassword
			}).success(function(data, status) {
				Auth.setUser(data);
				$scope.logUserIn(true);
			}).error(function(data, status) {
				if(data == 'username') {
					$scope.registerFormUsernameInvalid = true;
					$scope.registerFormEmailInvalid = false;
				} else {
					$scope.registerFormEmailInvalid = true;
					$scope.registerFormUsernameInvalid = false;
				}
			});
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
	$scope.logUserIn = function(newUser) {
		if(newUser) {
			Auth.setNewUser(newUser);
		} else {
			Auth.setNewUser(false);
		}
		$location.path('/home');
	}
}]);
