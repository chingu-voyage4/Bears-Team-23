const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const keys = require('./keys.js');
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
        consumerKey: keys.twitter.consumerKey,
        consumerSecret: keys.twitter.consumerSecret,
        callbackURL: '/auth/twitter/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        //console.log(profile.id);
        //console.log(profile.displayName);

        User.findOne({'twitter.twitterId': profile.id_str}).then((currentUser) => {
            
            if(currentUser){
                console.log('found')
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                console.log('not found')
                let newUser = new User();
                newUser.twitter.id          = profile.id_str;
                newUser.twitter.username    = profile.username;
                newUser.twitter.displayName = profile.displayName;
                

                newUser.save().then((newUser)=> {
                    done(null, newUser);
                })
            }
        });
    }

    )
);


