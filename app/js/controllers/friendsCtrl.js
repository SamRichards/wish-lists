angular.module('wishlists').controller('friendsCtrl', ['$scope', 'Auth', '$location', 'RoutingService', 'SessionStorage', 'Friends',
	function($scope, Auth, $location, RoutingService, SessionStorage, Friends) {

		$scope.getFriends = function() {
			return Friends.getFriends();
		}
}]);
