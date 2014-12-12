app.service('Friends', function($http, SessionStorage, RoutingService, Auth){

    var friends;

    var getFriends = function() {
        if(friends) {
            console.log(friends);
            return friends;
        } else {
            loadFriends().then(function(data) {
                return friends;
            });
        }
    }

    var loadFriends = function() {
        var promise = $http.post(RoutingService.serverUrl + '/retrieveFriends', {username: Auth.getUser().username})
            .then(function(response) {
                friends = response.data;
                return friends;
            });
        return promise;
    }

    return {
        loadFriends : loadFriends,
        getFriends: getFriends
    }
});