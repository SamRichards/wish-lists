angular.module('wishlists').controller('homepage', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
	
	console.log(Auth);
	console.log($scope);
	console.log(Auth.getUser());
	
}]);