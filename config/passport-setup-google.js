const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./../models/schemas/user');




passport.serializeUser((User, done) => {
    done(null, User.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((User) => {
        done(null, User);
    });
});


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
                  username:profile.emails[0].value
                }
              }
          ).save();

        done(null, newUser);
        }
    }

    )
);
