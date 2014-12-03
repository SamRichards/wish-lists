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
	  	when('/about', {
	  		template: 'ABOUT PAGE'
	  	}).
	  	when('/products', {
	  		template: 'products'
	  	}).
	  	when('/services', {
	  		template: 'services'
	  	}).
	  	when('/contact', {
	  		template: 'contact'
	  	}).
	  	otherwise({
	    	redirectTo: '/login'
	  	});
}]);