app.service('Auth', function($http){
    var user, newUser = false;

    return{
        setUser : function(aUser){
            user = aUser;
        },
        isLoggedIn : function(){
            return (user) ? true : false;
        },
        getUser: function() {
            return user;
        },
        isNewUser: function() {
            return newUser;
        }, 
        setNewUser: function(newValue) {
            newUser = newValue;
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