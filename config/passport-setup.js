const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./../models/schemas/user');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

//Twitter Strategy
passport.use(
    new TwitterStrategy({
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        callbackURL: '/auth/twitter/redirect'
    }, async (accessToken, refreshToken, profile, done) => {
        const currentUser = await User.findOne({'twitter.id': profile.id});
        if(currentUser){
            done(null, currentUser);
        }
        else {
            const newUser = await new User(
              {
                twitter:{
                  id: profile.id,
                  displayName: profile.displayName,
                  username:profile.username
                }
              }
          ).save();

        done(null, newUser);
        }
    }

    )
);

//Google Strategy
passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/redirect'
    }, async (accessToken, refreshToken, profile, done) => {
        const currentUser = await User.findOne({'google.id': profile.id});
        if(currentUser){
            done(null, currentUser);
        }
        else {
            const newUser = await new User(
              {
                google:{
                  id: profile.id,
                  displayName: profile.displayName,
                  username:profile.id
                }
              }
          ).save();

        done(null, newUser);
        }
    }

    )
);
