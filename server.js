var express = require("express");
var app = express();

/* serves main page */
app.get("/", function(req, res) {
	console.log('send file');
	res.sendfile('app/index.html')
});

app.post("/user/add", function(req, res) { 
	console.log(req.params);
	/* some server side logic */
	res.send("OK");
});

app.get('/users', function(req, res) {
	//res.send("hello world you snake please fucking worK");
	res.send(data.people);
});

app.post("/user/checkValidUser", function(req, res) {
	console.log(req);
//	console.log(req.route);
	
	res.send('no');
});

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