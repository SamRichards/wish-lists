angular.module('user', [])
	.value('user', {
		firstName: 'Samuel', 
		middleName: 'Mark',
		lastName: 'Richards',
		loggedIn: false
	});

angular.module('homepageLogInCheck', ['user'])
	.exists(function(user) {
		return user === undefined;
	})
	.getUsersName(function(user) {
		return user.firstName + " " + user.middleName + " " + user.lastName;
	})
	.isLoggedIn(function(user){
		return user.loggedIn;
	})