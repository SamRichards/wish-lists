var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('app/index.html')
});

addApi();

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
	res.sendfile( __dirname + '/app' + req.params[0]); 
});

var port = process.env.PORT || 5000;
	app.listen(port, function() {
	console.log("Listening on " + port);
});






var data = {};
data.people = [
		{
			username:'sam',
			firstname:'sam',
			lastname:'richards',
			email:'samuelmarkrichards@gmail.com',
			password:'pass', 
			friends: ['hannah', 'tim']
		},
		{
			username:'hannah',
			firstname:'hannah',
			lastname:'mills',
			email:'smile4eva3@hotmail.co.uk',
			password:'pass',
			friends: ['sam']
		},
		{
			username: 'tim',
			firstname: 'timothy',
			lastname: 'Martins',
			email: 'timberns@hotmail.com',
			password: 'pass',
			friends: ['sam']
		}
	];

function getParameter(req, param) {
	return req.body[param];
}

function stringify(object) {
	return JSON.stringify(object);
}

function findUser(username) {
	var i = 0, found = false;

	while (i < data.people.length && !found) {
		if(data.people[i].username === username) {
			return data.people[i];
		} else {	
			i++;
		}
	}
}

function findUserSafe(username) {
	//remove the user password element);
	var user = findUser(username);
	
	user = clientSideUserObject(user);

	return user;
}

function clientSideUserObject(user) {
	user = deepCopy(user);
	delete user.password;

	return user;
}

function addApi() {
	//app.get('/users', function(req, res) {
		//res.send("hello world you snake please fucking worK");
	//	res.send(data.people);
	//});

	app.post("/user/checkValidUser", jsonParser, function(req, res) {
		checkValidUser(req, res);
	});

	app.post("/user/register", jsonParser, function(req, res) {
		registerUser(req, res);
	});

	app.post('/retrieveFriends', jsonParser, function(req, res) {
		getUserFriends(req, res);
	});
}

function checkValidUser(req, res) {
	var user = findUser(getParameter(req, 'username'));

	if(user && getParameter(req, 'password') === user.password) {
		user = clientSideUserObject(user);
		delete user.friends;
		res.send(stringify(user));
	} else {
		res.status(401).send('Not authorised');
	}
}

function checkUserUniqueElements(username, email) {
	for(var i = 0; i < data.people.length; i++) {
		if(data.people[i].username === username || data.people[i].email === email) {
			if(data.people[i].username === username) {
				return 'username';
			} else {
				return 'email';
			}
		}
	}
	return true;
}

function getUserFriends(req, res) {
	var user = findUserSafe(getParameter(req, 'username'));

	var friends = [];

	for(var i in user.friends) {
		friends.push(findUserSafe(user.friends[i]));
	}

	res.send(stringify(friends));
}

function registerUser(req, res) {
	//json parameters - username, firstname, lastname, email, password
	var newUser = {
		username: getParameter(req, 'username'),
		firstname: getParameter(req, 'firstname'),
		lastname: getParameter(req, 'lastname'),
		email: getParameter(req, 'email'),
		password: getParameter(req, 'password')
	}, 
	check = checkUserUniqueElements(newUser.username, newUser.email);
	if(check === true) {
		data.people.push(newUser);
		res.send(newUser);
	} else {
		res.status(401).send(check);
	}
}

function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for ( ; i < len; i++ ) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for ( i in obj ) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    return obj;
}
