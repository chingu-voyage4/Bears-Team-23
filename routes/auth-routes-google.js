const router = require('express').Router();
const passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  // callback route for twitter to redirect to
  // hand control to passport to use code to grab profile info
  router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
  });

  router.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

  module.exports = router;
