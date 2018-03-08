const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('./../models/schemas/user');




passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(
    new TwitterStrategy({
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        callbackURL: '/auth/twitter/redirect'
    }, async (accessToken, refreshToken, profile, done) => {
        const currentUser = await User.findOne({'twitterId': profile.id_str});

        if(currentUser){
            done(null, currentUser);
        }
        else {
            const newUser = await new User({
                twitterId: profile.id_str,
                displayName: profile.displayName,
            }).save();

        done(null, newUser);
        }
    }

    )
);
