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
data.people = [{username:'sam',firstname:'sam',lastname:'richards',email:'samuelmarkrichards@gmail.com',password:'pass'},
			   {username:'hannah',firstname:'hannah',lastname:'mills',email:'smile4eva3@hotmail.co.uk',password:'pass'}];

function addApi() {
	//app.get('/users', function(req, res) {
		//res.send("hello world you snake please fucking worK");
	//	res.send(data.people);
	//});

	app.post("/user/checkValidUser", jsonParser, function(req, res) {
		var user = getUserLogin(getParameter(req, 'username'), getParameter(req, 'password'));
		if(user) {
			res.send(stringify(user));		
		} else {
			res.status(401).send('Not authorised');
		}
	});
}

function getUserLogin(username, password) {
	for(var i = 0; i < data.people.length; i++) {
		if(data.people[i].username === username && data.people[i].password === password) {
			return data.people[i];
		}
	}
	return false;
}

function getParameter(req, param) {
	return req.body[param];
}

function stringify(object) {
	return JSON.stringify(object);
}
