import axios from 'axios'
import {store} from './../index.js'

//console.log(store.getState().user.user);


export function getRandomPic(){

  return new Promise((resolve,reject)=>{
    let user = store.getState().user.user.username==="Guest" ? store.getState().user.user.userip : store.getState().user.user.username
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
  if(store.getState().user.user.username==="Guest"){
   console.log("Guests not allowed here");
   return null;
  }
  const user = store.getState().user.user.username;
  return new Promise((resolve,reject)=>{
    axios.get('/api/crud/profile/'+user)
      .then((response)=>{
        resolve(response.data)
      })
      .catch((err)=>{
        reject(err.data)
      })
  })
}

export function createPic(picInfo){
  if(store.getState().user.user.username==="Guest"){
    console.log("Guests not allowed here")
    return null;
  }

  picInfo.owner = store.getState().user.user.username;

  return new Promise((resolve,reject)=>{
    axios.post('/api/crud',picInfo)
      .then((response)=>{
        resolve(response.data)
      })
      .catch((err)=>{
        reject(err.data)
      })
  })
}

export function updatePic(picID,updateQuery){
  return new Promise((resolve,reject)=>{
    axios.put('/api/crud/'+picID,updateQuery)
    .then((response)=>{
      resolve(response.data)
    })
    .catch((err)=>{
      reject(err.data)
    })
  })
}

export function deletePic(picID){

  if(store.getState().user.user.username==="Guest"){
    console.log("Guests not allowed here")
    return null;
  }
  return new Promise((resolve,reject)=>{
    axios.delete('/api/crud/'+picID)
    .then((response)=>{
      resolve(response.data)
    })
    .catch((err)=>{
      reject(err.data)
    })
  })
}
