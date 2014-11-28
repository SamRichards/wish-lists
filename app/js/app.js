angular.module('homepageLogInCheck', [])
	.value('user', {
		firstName: 'Samuel', 
		middleName: 'Mark',
		lastName: 'Richards',
		username: 'SamRichards',
		loggedIn: false,
		getUsersName: function() {
			return this.firstName + " " + this.middleName + " " + this.lastName;
		},
		isLoggedIn: function() {
			return this.loggedIn;
		}
	});