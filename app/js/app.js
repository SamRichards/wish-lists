var app = angular.module('wishlists', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	  	when('/login', {
	    	templateUrl: 'partials/login.html',
	    	controller: 'logInPage'
	  	}).
	  	when('/home', {
	  		templateUrl: 'partials/homepage.html',
	  		controller: 'homepage'
	  	}).
	  	otherwise({
	    	redirectTo: '/login'
	  	});
}]);

app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {
        if (!Auth.isLoggedIn()) {
            $location.path('/login');
        }
        else {
            $location.path('/home');
        }
    });
}]);