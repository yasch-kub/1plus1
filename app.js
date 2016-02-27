var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

var index = require('./routes/index');

app.set('port', 8080);
app.set('x-powered-by', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(__dirname + 'public'));
app.use('/', index);

app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});