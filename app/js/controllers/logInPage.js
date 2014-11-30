angular.module('wishlists').controller('logInPage', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
	
	$scope.username, $scope.password,
	$scope.registerUsername, $scope.registerEmail, $scope.registerPassword, $scope.registerFirstName, $scope.registerSecondName,

	$scope.toggleLogInClass = function() {
		this.showLoginForm = !this.showLoginForm;
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
			}
		}
	},
	$scope.$watch(Auth.isLoggedIn, function(value, oldValue) {
		if(value) {
			$location.path('/home');
		}
	})
	,
	$scope.submitRegister = function(form) {
		if(form.$valid) {
			console.log('register');
			console.log($scope);
			console.log($scope.registerFirstName);
			console.log($scope.registerSecondName);
			console.log($scope.registerUsername);
			console.log($scope.registerEmail);
			console.log($scope.registerPassword);
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