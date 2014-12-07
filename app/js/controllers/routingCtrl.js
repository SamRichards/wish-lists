angular.module('wishlists').controller('routingCtrl', ['$scope', '$location', 'Auth', '$http', 'RoutingService',
	function($scope, $location, Auth, $http, RoutingService) {

    $scope.$on('$routeChangeStart', function (event, next, previous, forth) {
    	if(next.$$route) {
	    	if(!Auth.getUser()) {
	    		$location.path('/login');
	    	} else {
	    		if(next.$$route.originalPath === '/login') {
	    			$location.path('/home');
	    		} else {
	    			RoutingService.setPath(next.$$route.originalPath);
	    		}
	    	};
    	};
	});

}]);
