import axios from 'axios'
import {store} from './../index.js'

export const userInfo = ()=>store.getState().user.user

export function getRandomPic(){
  const user = userInfo().username==="Guest" ? userInfo().userip : userInfo().username
  return new Promise((resolve,reject)=>{
    axios.get('/api/crud/'+user)
    .then((response)=>{
      resolve(response.data)
    })
    .catch((err)=>{
      reject(err.data)
    })
  })
}

export function getProfilePics(){
  if(userInfo().username==="Guest"){
   console.log("Guests not allowed here");
   return null;
  }
  const user = userInfo().username;
  return new Promise((resolve,reject)=>{
    axios.get('/api/crud/profilePics/'+user+"?username="+user)
      .then((response)=>{
        resolve(response.data)
      })
      .catch((err)=>{
        reject(err.data)
      })
  })
}

export function createPic(picInfo){
  if(userInfo().username==="Guest"){
    console.log("Guests not allowed here")
    return null;
  }

  picInfo.owner = userInfo().username;
  picInfo.timeStamp = Date.now();
  picInfo.totalRatings = 0;
  picInfo.avgRating = 0;
  picInfo.voted = [];

  return new Promise((resolve,reject)=>{
    axios.post('/api/crud?username='+userInfo().username,picInfo)
      .then((response)=>{
        resolve(response.data)
      })
      .catch((err)=>{
        reject(err.data)
      })
  })
}

export function updatePic(currentState,newrating){
  const user = userInfo().username==="Guest" ? userInfo().userip : userInfo().username
  const newAve = ((currentState.avgRating*currentState.totalRatings) + Number(newrating))/(currentState.totalRatings + 1)
  const updateInfo = {
     totalRatings: currentState.totalRatings+1, //increment from current picture ratings in current state
     // = ((avgRating * totalRatings) + currentRating) / (totalRatings + 1)
     avgRating: newAve, //compute from current picture ratings in current state
     voted: [...currentState.voted,user] //add current voteer in old voted array
  }
  return new Promise((resolve,reject)=>{
    axios.put('/api/crud/'+currentState._id,updateInfo)
    .then((response)=>{
      resolve(response.data)
    })
    .catch((err)=>{
      reject(err.data)
    })
  })
}

export function deletePic(picID){
  if(userInfo().username==="Guest"){
    console.log("Guests not allowed here")
    return null;
  }
  return new Promise((resolve,reject)=>{
    axios.delete('/api/crud/'+picID+"?username=" + userInfo().username)
    .then((response)=>{
      resolve(response.data)
    })
    .catch((err)=>{
      reject(err.data)
    })
  })
}
