var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const csurf = require('csurf');
const helmet = require('helmet');

// Load models directory (which loads ./models/index)
const models = require('./models');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var eventRouter = require('./routes/events');
var memberRouter = require('./routes/members');

var app = express();

// add helmet protections from various attacks
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'script-src': ['"self"', 'https://drive.google.com/', 'https://docs.google.com/', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js', 'https://code.jquery.com/jquery-3.3.1.slim.min.js'],
      'script-src-elem': ['"self"', 'https://code.jquery.com/jquery-3.3.1.slim.min.js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'],
      'frame-src': ['"self"', 'https://formfacade.com/', 'https://www.google.com/', 'https://drive.google.com/', 'https://docs.google.com/', 'https://calendar.google.com/', 'https://mapsengine.google.com/'],
    },
  }),
);
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const sequelizeSessionStore = new SequelizeStore({
  db: models.sequelize,
  table: 'Session',
});
// if cookie secret isn't defined - throw an error
if (!process.env.COOKIE_SECRET) {
  throw Error('COOKIE_SECRET environment variable is undefined');
}
const sess = {
  secret: process.env.COOKIE_SECRET,
  store: sequelizeSessionStore,
  resave: false,
  cookie: {},
  saveUninitialized: true,
};
// In production, serve secure cookies (https only)
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session({
  secret: process.env.COOKIE_SECRET,
  store: sequelizeSessionStore,
  resave: false,
  cookie: {},
  saveUninitialized: true,
}));
// cross site request forgery protection
// disable csurf for testing
if (process.env.NODE_ENV === 'test') {
  app.use(csurf({ cookie: true, ignoreMethods: ['GET', 'POST'] }));
} else {
  app.use(csurf({ cookie: true }));
}

app.use(passport.initialize());
app.use(passport.session());

/**
 * Database configuration
 * The actual connecting to the database happend in `./models/index.js`,
 * this file just syncs the models and verifies the connection is valid
 */
// Sync models - very important step
models.sequelize.sync();
// Check connection
models.sequelize.authenticate().then(() => {
  console.log('Connection to database established.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
  // Kill the process because there's no connection to the database
  process.exit();
});

/**
 * custom variable definiton middleware
 * This defines variables for alerting if they do not exist
 * Defines status variable if it does not exist
*/
function createVariablesMiddleware(req, res, next) {
  if (typeof req.session.status !== 'undefined') {
    res.locals.status = req.session.status;
  } else {
    res.locals.status = 200;
  }
  req.session.status = 200;
  if (typeof req.session.alert !== 'undefined') {
    // If the alert object exists, set it to the local object so it will render
    res.locals.alert = req.session.alert;
  } else {
    // Regardless of if alert exists, set it to an empty object
    res.locals.alert = {};
    // Set all arrays to empty
    res.locals.alert.errorMessages = [];
    res.locals.alert.infoMessages = [];
    res.locals.alert.successMessages = [];
  }
  // Regardless of if alert exists, set it to an empty object
  req.session.alert = {};
  // Set all arrays to empty
  req.session.alert.errorMessages = [];
  req.session.alert.infoMessages = [];
  req.session.alert.successMessages = [];
  // set res.locals variables so that the views have access to them
  res.locals.user = req.user;
  // set csrfToken to token
  res.locals.csrfToken = req.csrfToken();
  // continue execution to next middleware handler
  next();
}
app.use(createVariablesMiddleware);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/events", eventRouter);
app.use("/members", memberRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Passport configuration
 *
 */
 passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  (username, password, done) => {
    models.Member.findOne({
      where: {
        email: username,
      },
    }).then((member) => {
      if (member) {
        // Member exists, validate password
        return models.Member.comparePassword(password, member).then((res) => {
          if (res === false) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          // Member is found and has a valid password
          return done(null, member);
        });
      }
      // Member doesn't exist, throw an error
      return done(null, false, { message: 'Member not found.' });
    });
  },
));

// takes the user(Member) and converts it to just an id for the client session cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// converts the cookie from the client into an instance of Member upon a request
passport.deserializeUser((id, done) => {
  models.Member.findByPk(id).then((member) => {
    return done(null, member);
  }).catch((err) => {
    return done(err, null);
  });
});

module.exports = app;
