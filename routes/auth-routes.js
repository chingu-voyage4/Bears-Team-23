const router = require('express').Router();
const passport = require('passport');

router.get('/twitter', passport.authenticate('twitter', {
    scope: ['profile']
  }));
  
  // callback route for google to redirect to
  // hand control to passport to use code to grab profile info
  router.get('/twitter/redirect', passport.authenticate('twitter'), (req, res) => {
    res.send('you reached the redirect URI');
  });

  router.get('/hey',(req,res)=> {
    res.send('hello')
  })

  module.exports = router;