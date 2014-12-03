angular.module('wishlists').controller('logInPageCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {

	$scope.username, $scope.password,
	$scope.registerUsername, $scope.registerEmail, $scope.registerPassword, $scope.registerFirstName, $scope.registerSecondName,
	$scope.showLoginForm = true;

	$scope.toggleLogInClass = function() {
		$scope.showLoginForm = !$scope.showLoginForm;
	},
	$scope.submitLogIn = function(form) {
		if(form.$valid) {
			if($scope.username == 'sam' && $scope.password == 'pass') {
				Auth.setUser({
					username: 'sam',
					firstname: 'sam', 
					lastname: 'richards',
					email: 'samuelmarkrichards@gmail.com', 
					password: 'pass'
				});
				$location.path('/home');
			} else if($scope.username == 'hannah' && $scope.password == 'pass') {
				Auth.setUser({
					username: 'hannah',
					firstname: 'hannah',
					lastname: 'mills',
					email: 'smile4eva3@hotmail.co.uk',
					password: 'pass'
				});
				$location.path('/home');
			}
		}
	},
	//$scope.$watch(Auth.isLoggedIn, function(value, oldValue) {
		//if(value) {
	//		$location.path('/home');
		//}
	//})
	//,
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
	}
}]);


/*
function setupLoginForm() {
	var formInputs = document.getElementById('log-in-form').getElementsByTagName('input');
	for(var i  = 0; i < formInputs.length; i++) {
		if(checkFormInputTextValue(formInputs[i])) {
			formInputs[i].className = "used";
		} else {
			formInputs[i].className = "";
			formInputs[i].blur();
		}
	}
};
*/