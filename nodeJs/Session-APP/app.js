var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// invoke an instance of express application.
var app = express();

// set our application port
app.set('port', 9000);

// set morgan to log info about our requests for development use.

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/register.html");
});

app.get('/register', (req, res) => {
    var details = {
        username: req.query.name,
        pwd: req.query.password
    }
    req.session.user = details;
    res.redirect('/secret');
});
app.get("/secret", (req, res) => {
    /* 
     */
    res.sendFile(__dirname + '/public/secret.html');
    console.log(res.locals.currentUser);
});

// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));