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

app.run(['$rootScope', '$location', 'Auth', '$http', function ($rootScope, $location, Auth, $http) {

	//just loads the sample user and stores them as the active user, so it logs the user in.
	$http.get('json/sampleUser.json').success(function(data) {
		Auth.setUser(data[0]);
    });

    $rootScope.$on('$routeChangeStart', function (event) {
        if (!Auth.isLoggedIn()) {
            $location.path('/login');
        }
        else {
            $location.path('/home');
        }
    });
}]);