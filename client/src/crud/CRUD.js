import axios from 'axios'

export function getRandomPic(user){
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

export function getProfilePics(user){
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
