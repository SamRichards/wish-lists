app.service('Auth', function($http){
    var user;

    return{
        setUser : function(aUser){
            user = aUser;
        },
        isLoggedIn : function(){
            return (user) ? user : false;
        },
        getUser: function() {
            return user;
        }
    }
});

/*
app.service('Auth', function($http){
    return {
        isLogin:function(callback){
            $http.get('api/auth/checkLogin').success(function(res){
                callback(res);
            });
        },
        login:function(user, callback){
            $http.post('api/auth/login', user).success(function(res){
                callback(res);
            });
        },
        logout:function(callback){
            $http.get('api/auth/logout').success(function(res){
                callback(res);
            });
        }
    };
});
*/