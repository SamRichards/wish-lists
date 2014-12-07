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
	  		templateUrl: 'partials/about.html'
	  	}).
	  	when('/products', {
	  		templateUrl: 'partials/products.html'
	  	}).
	  	when('/services', {
	  		templateUrl: 'partials/services.html'
	  	}).
	  	when('/contact', {
	  		templateUrl: 'partials/contact.html'
	  	}).
	  	otherwise({
	    	redirectTo: '/login'
	  	});
}]);
