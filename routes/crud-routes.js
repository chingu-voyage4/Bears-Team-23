const router = require('express').Router();
const cookieSession = require('cookie-session');

const pictures = require('../models/schemas/pictures');


router.get('/api/crud/:user',(req,res)=>{ // random pic fetcher
    pictures.find({},(err,pics)=>{
      if(err){
        throw err
      }
      else{
        const picToSend = randomPic(pics,req.params.user)
        res.json(picToSend ? picToSend : null)
      }
    })
})

router.get('/api/crud/profilePics/:user',(req,res)=>{ // profile pics fetcher
    const query = {owner:req.params.user}
    pictures.find(query,(err,pics)=>{
      if(err){
        throw err
      }
      else{
        res.json(pics)
      }
    })
})

router.post('/api/crud',(req,res)=>{ // Creates new pic
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
   const updateInfo = {
     totalRatings:req.body.totalRatings,
     avgRating:req.body.avgRating,
     voted:req.body.voted
   };
   const picID = req.params._id;

   const update = { '$set': updateInfo};
   const modified = {new: true}; //optional, if true responds with the modified document
   pictures.findByIdAndUpdate(picID, update, modified, (err, pic)=>{
       if(err){
         throw err;
       }
       else{
         res.json(pic);
       }
   })
})

router.delete('/api/crud/:_id',(req,res)=>{ //deletes pic
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


module.exports = router


function randomPic(picArr,user){
  let foundPic = false
  let alreadyVoted=[]
  let chosenPic=undefined

  while (!foundPic){
    const randNum = Math.floor(Math.random() * (picArr.length));
    if(picArr[randNum].voted.includes(user)){
      alreadyVoted.push(randNum)
    }
    else{
      foundPic = true
      chosenPic=picArr[randNum]
    }
    if (alreadyVoted.length===picArr.length){
      break;
    }
  }
  return chosenPic
}
