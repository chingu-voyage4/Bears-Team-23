const router = require('express').Router();
const passport = require('passport');

router.get('/auth/twitter', passport.authenticate('twitter', {
    scope: ['profile']
  }));
  
  // callback route for twitter to redirect to
  // hand control to passport to use code to grab profile info
  router.get('/auth/twitter/redirect', passport.authenticate('twitter'), (req, res) => {
    res.send('you reached the redirect URI');
  });

  module.exports = router;