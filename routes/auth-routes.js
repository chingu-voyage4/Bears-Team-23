const router = require('express').Router();
const passport = require('passport');

  //Twitter login routes
  router.get('/auth/twitter', passport.authenticate('twitter', {
    scope: ['profile']
  }));

  // callback route for twitter to redirect to
  // hand control to passport to use code to grab profile info
  router.get('/auth/twitter/redirect', passport.authenticate('twitter'), (req, res) => {
    res.redirect('/');
  });

  //Google login routes
  router.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    }));


  router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
  });

//logout route for any service provider
  router.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

//Other authentication routes for client side use below
router.get('/api/profile',isLoggedIn, (req, res)=> {
    let headerObject = req.headers //need for ip
    let ip = (headerObject['x-forwarded-for']||req.socket.remoteAddress).split(",")[0];
    ip = (ip === "::1") ? "local" : ip

    const allAuthServices = ["google","twitter"]
    const authService = allAuthServices.filter((a)=>{
      return (req.user[a].username)
    })[0]
    res.json({
          authenticated: true,
          userip: ip,
          username: req.user[authService].username,
          displayName: req.user[authService].displayName,
          authService:authService
      });
  })

router.get('/api/guest', (req, res) => {
  let headerObject = req.headers
  //the x-forwarded-for property of the header does not appear for local host so add an alternative or will
  //error out locally on split to get the ip address the rest of the requests are common to loacl and remote
   let ip = (headerObject['x-forwarded-for']||req.socket.remoteAddress).split(",")[0];
   ip = (ip === "::1") ? "local" : ip
    res.json({
      authenticated: false,
      userip: ip,
      username: "Guest",
      displayname: "Guest",
      authService: null
    });
});
// route middleware, the main function that checks if a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't populate the profile page accordingly
    let headerObject = req.headers
     //the x-forwarded-for property of the header does not appear for local host so add an alternative or will
     //error out locally on split to get the ip address the rest of the requests are common to loacl and remote
    let ip = (headerObject['x-forwarded-for']||req.socket.remoteAddress).split(",")[0];
    ip = (ip === "::1") ? "local" : ip
    res.json({
      authenticated: false,
      userip: ip,
      username: null,
      displayname: null,
      authService:null
    });
}
  module.exports = router;
