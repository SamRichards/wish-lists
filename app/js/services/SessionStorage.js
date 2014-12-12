app.service('SessionStorage', ['$window', function($window) {
    
    var localStorage = $window.localStorage;

    //localStorage.clear();

    return{
    	localStorage : localStorage,
        setLocalUser : function(value) {
            this.setLocalStorageJson('user', value);
        },
        getLocalUser : function () {
            return this.getLocalStorageKey('user');
        },
    	setLocalStorageKey : function(key, value) {
    		localStorage[key] = value;
    	},
        getLocalStorageKey : function(key) {
            return localStorage[key];
        },
    	setLocalStorageJson : function(key, value) {
    		localStorage.setItem(key, JSON.stringify(value));
    	},
    	getLocalStorageJson : function(key) {
    		return JSON.parse(localStorage.getItem(key));
    	},
        removeUser: function() {
            localStorage.removeItem('user');
        },
        clearLocalStorage: function() {
            localStorage.clear();
        }
    }
}]);
