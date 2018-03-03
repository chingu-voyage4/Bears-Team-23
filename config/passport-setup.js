const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(
    new TwitterStrategy({
        // options for google strategy

        callbackURL: 'http://localhost:3000'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);
    })
);

