angular.module('wishlists').controller('routingCtrl', ['$scope', '$location', 'Auth', '$http', 'RoutingService',
	function($scope, $location, Auth, $http, RoutingService) {
   


    $scope.$on('$routeChangeStart', function (event, next, previous, forth) {

    	//sets the routing service information
    	RoutingService.setPath(next.$$route.originalPath);
    	if(previous) {
    		RoutingService.setPrevious(previous.$$route.originalPath);
		}

    	if(!Auth.getUser()) {
    		$location.path('/login');
    	} 
    	else {
    		//the otherwise will catch the outsi
    		if(next.$$route.originalPath === '/login') {
    			event.preventDefault();
    			$location.path('/home');
    		}
    	}

    	//just loads the sample user and stores them as the active user, so it logs the user in.
		/*
		if(!Auth.getUser()) {
			console.log('user dont exist');
			
		    $http.get('json/sampleUser.json').then(function(data) {
		    console.log(data);
			Auth.setUser(data[0]);
		    	if (!Auth.isLoggedIn()) {
		       	 	$location.path('/login');
		    	}
			}, function(err) { $location.path('/login'); });
		} else {
			console.log('user does exist');
			//should check they havent timeout
		}
		*/

	});

}]);