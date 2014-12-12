app.service('Auth', function($http, SessionStorage){
    var user, newUser = false;

    return{
        setUser : function(aUser) {
            user = aUser;
            SessionStorage.setLocalUser(aUser); 
        },
        isLoggedIn : function(){
            return (user) ? true : false;
        },
        getUser: function() {
            if(!user) {
                var userData = SessionStorage.getLocalUser();
                if(userData) {
                    user = JSON.parse(userData);
                } else {
                    return false;
                }
            } else {
                return user;
            }
        },
        isNewUser: function() {
            return newUser;
        }, 
        setNewUser: function(newValue) {
            newUser = newValue;
        },
        getUserFullName: function() {
            if(user) {
                return user.firstname.capitalize() + ' ' + user.lastname.capitalize();
            }
        },
        logOut: function() {
            user = null;
        }
    }
});