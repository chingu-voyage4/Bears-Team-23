const router = require('express').Router();

const pictures = require('../models/schemas/pictures');


router.get('/api/crud/:user',(req,res)=>{ // random pic fetcher
      pictures.find({},(err,pics)=>{
        if(err){
          throw err
        }
        else{
          const picToSend = randomPic([...pics],req.params.user)
          res.json(picToSend)
        }
      })
})

router.get('/api/crud/profilePics/:user',verifyAuthentication,(req,res)=>{ // profile pics fetcher
    const query = {'owner.username':req.params.user}
    pictures.find(query,(err,pics)=>{
      if(err){
        throw err
      }
      else{
        res.json(pics)
      }
    })
})

router.post('/api/crud',verifyAuthentication,(req,res)=>{ // Creates new pic
  const newPicture = req.body
  pictures.create(newPicture,(err,pics)=>{
    if(err){
      throw err
    }
    else{
      res.json(pics)
    }
  })
})

router.put('/api/crud/:_id', (req, res)=>{ // update pic
  const picID = req.params._id;
  pictures.findById(picID).then((picObject)=>{
    console.log(picObject)
    const newAve = ((picObject.avgRating*picObject.totalRatings) + Number(req.body.newrating))/(picObject.totalRatings + 1)
    const updateInfo = {
       totalRatings: picObject.totalRatings+1,
       avgRating: newAve, //compute from current picture ratings in current state
       voted: [...picObject.voted,req.body.user] //add current voteer in old voted array
    }
    const update = { '$set': updateInfo};
    const modified = {new: true}; //optional, if true responds with the modified document
    pictures.findByIdAndUpdate(picID, update, modified, (err, pic)=>{
        if(err){
          throw err;
        }
        else{
          res.json(clientFilter(pic));
        }
    })
  })
})

router.delete('/api/crud/:_id',verifyAuthentication,(req,res)=>{ //deletes pic
    const query = {_id: req.params._id};
    pictures.remove(query, (err, pic)=>{
      if(err){
        throw err;
      }
      else{
        res.json(pic);
      }
    })
})

router.get('/api/crud/orderedpics/:order/:limit',verifyAuthentication,(req,res)=>{
  const sortType = req.params.order == 'ascending' ? 'avgRating' : '-avgRating'

  // get ordered list
  pictures.find({totalRatings: {$gt: 5}})
  .sort(sortType)
  .limit(parseInt(req.params.limit))
  .exec((err,pics)=> {
    if(err){
      throw err
    }
    else{
      const picsObject = pics.map((pic)=> {
        return clientFilter(pic)
      })
      res.send(picsObject);
    }
  })
})


module.exports = router

function randomPic(picArr,user){
  if(!picArr.length){
    return null
  }
  let chosenPic
  let alreadyVoted=[]

  while (true){
    const randNum = Math.floor(Math.random() * (picArr.length));
    //unable to attach new property (node/mongoose response related ??) so must do a deep copy
    chosenPic=JSON.parse(JSON.stringify(picArr[randNum]))
    if(chosenPic.voted.includes(user)){
      if(!alreadyVoted.includes(randNum)){
        alreadyVoted.push(randNum)
      }
      else{
        continue;
      }
    }
    else{//found an unvoted pic
      chosenPic.votable = true //new property only for client one time use not to be included in dB
      break;
    }

    if (alreadyVoted.length===picArr.length){// all pics in DB have been voted on at this point
      chosenPic.votable = false
      break;
    }
  }

  return clientFilter(chosenPic)
}

function clientFilter(fullObj){
  const {_id,imgLink,petName,totalRatings,avgRating,votable} = fullObj
  const picked = {
    _id:_id,
    imgLink:imgLink,
    petName:petName,
    avgRating:avgRating,
    totalRatings:totalRatings,
    votable:votable
  };
  return picked
}

function verifyAuthentication(req,res,next){
    if(req.user){
      //need to get auth service to verify authentication
      const allAuthServices = ["google","twitter"]
      const authService = allAuthServices.filter((a)=>{
        return (req.user[a].username)
      })[0]
      if(req.user[authService].username===req.query.username){
        return next();
      }
    }
    res.end("Access Denied!!")
  }
