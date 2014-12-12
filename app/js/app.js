var app = angular.module('wishlists', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	  	when('/login', {
	    	templateUrl: 'partials/login.html',
	    	controller: 'logInPageCtrl'
	  	}).
	  	when('/home', {
	  		templateUrl: 'partials/homepage.html',
	  		controller: 'homepageCtrl',
	  	}).
	  	when('/lists', {
	  		templateUrl: 'partials/lists.html'
	  	}).
	  	when('/friendslists', {
	  		templateUrl: 'partials/friendslists.html'
	  	}).
	  	when('/friends', {
	  		templateUrl: 'partials/friends.html',
	  		controller: 'friendsCtrl'
	  	}).
	  	when('/about', {
	  		templateUrl: 'partials/about.html'
	  	}).
	  	otherwise({
	    	redirectTo: '/login'
	  	});
}]);
