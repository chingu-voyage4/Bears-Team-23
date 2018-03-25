const express = require('express');
const bodyParser = require('body-parser');
const private = require('dotenv').config();
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const router = require('express').Router();
const cookieSession = require('cookie-session');

const authRoutes = require('./routes/auth-routes');
const crudRoutes = require('./routes/crud-routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // set up session cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));


// // initialize passport
app.use(passport.initialize());
app.use(passport.session());





//establishes db connection
const db = require('./models/db')
//access schemas / collections


app.use(authRoutes);
app.use(crudRoutes);
app.get('/',(req,res)=>{
  res.send('test')
})


app.listen(port, () => console.log(`Listening on port ${port}`));
