var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidators = require('express-validators');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://root:$shC0mpAt@127.0.0.1:27017/dbMBlob', {auth:{authdb:"admin"}});
var db = mongoose.connection;

// Init App
var app = express();

// Routes
var routes = require('./routes/index');
var users = require('./routes/users');

// Init the view engine. In this case we will use handlebars file extension
app.set( 'view', path.join(__dirname, 'views') );
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set( 'view engine', 'handlebars' );

app.use('/ryD2hkaf812PJwRt', express.static(path.join(__dirname, 'public')));
