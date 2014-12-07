angular.module('wishlists').controller('routingCtrl', ['$scope', '$location', 'Auth', '$http', 'RoutingService',
	function($scope, $location, Auth, $http, RoutingService) {

    $scope.$on('$routeChangeStart', function (event, next, previous, forth) {
    	//sets the routing service information
    	if(next.$$route) {
    		//sets the next path
	    	//if the previous object is found, include its path
	    	//if(previous) {
	    	//	RoutingService.setPrevious(previous.$$route.originalPath);
			//}
	    	if(!Auth.getUser()) {
	    		$location.path('/login');
	    	} else {
	    		//the otherwise will catch the outside urls
	    		if(next.$$route.originalPath === '/login') {
	    			$location.path('/home');
	    		} else {
	    			RoutingService.setPath(next.$$route.originalPath);
	    		}
	    	};
    	};
	});

}]);