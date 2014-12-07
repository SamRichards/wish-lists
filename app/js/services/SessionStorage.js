app.service('SessionStorage', ['$window', function($window) {
    
    var localStorage = $window.localStorage;

    localStorage.clear();
    //console.log('cleared');

    return{
    	localStorage : localStorage,
    	setLocalStorageKey : function(key, value) {
    		localStorage[key] = value;
    	},
    	setLocalStorageJson : function(key, value) {
    		localStorage.setItem(key, JSON.stringify(value));
    	},
    	getLocalStorageKey : function(key) {
    		return localStorage[key];
    	},
    	getLocalStorageJson : function(key) {
    		return JSON.parse(localStorage.getItem(key));
    	}
    }
}]);
