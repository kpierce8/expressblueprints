var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./models/user');
var passport = require('passport');

mongoose.connect('mongodb://localhost/chapter01', function(err) {
	if (err) throw err;
});



app.use(require('cookie-parser')('my secret string'));
app.use(require('express-session')({ secret: "my other secret string"}));
app.use(require('body-parser')());
app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next) {
	res.render('index');
});


// my fooling around
app.get('/bob', function(req, res, next) {
	res.send('Hello, Bob!');
});
app.get('/:aname', function(req, res, next) {
	res.send('Hello, ' + req.params.aname + ' !');
});
//back to example



app.listen(3000);
console.log('Express started on port 3000');
