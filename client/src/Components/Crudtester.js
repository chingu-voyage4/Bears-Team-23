import React, { Component } from 'react';

import {getRandomPic,getProfilePics,createPic,updatePic,deletePic,userInfo} from '../crud/CRUD'


class CRUD extends Component {

  async getRandPic(){
    const response = await getRandomPic()
    console.log(response);
  }

  async getPicsFromProfile(){
      const response = await getProfilePics()
      console.log(response)
  }

  async newPic(){

   const samplePic = await createPic({
      imgDescription:"test",
      imgLink:"https://",
    });
    console.log(samplePic);
  }


  async voteOnPic(){
    const currentState ={//sample current state
      _id: "5aa4ea84a9339f084821a1f4",
      voted: [],
      imgDescription: "test",
      imgLink: "https://",
      owner: "bears23v4",
      timeStamp: 1520757380138,
      totalRatings: 7,
      avgRating: 8.2,
    }
    const newRating = 9
    const response = await updatePic(currentState,newRating)
    console.log(response)
  }

  async removePic(){
      let picID = "5aa4f7c7c002cc21d43e24b5" //get this from the current picture that is being voted on
      const response = await deletePic(picID)
      console.log(response)
  }

  render() {
    if(userInfo().authenticated || userInfo().username==="Guest"){
      return (
        <div style={{"width":"80%","margin":"0 auto","marginTop":"50px"}}>
          <button style={{"marginRight":"30px"}} onClick={this.getRandPic.bind(this)}> Get Random Pic </button>
          <button style={{"marginRight":"30px"}} onClick={this.getPicsFromProfile.bind(this)}> Get Profile Pics </button>
          <button style={{"marginRight":"30px"}} onClick={this.newPic.bind(this)}> Create New Pic </button>
          <button style={{"marginRight":"30px"}} onClick={this.voteOnPic.bind(this)}> Update Pic </button>
          <button style={{"marginRight":"30px"}} onClick={()=>console.log(userInfo())}> Get User </button>
          <button onClick={this.removePic.bind(this)}> Delete Pic</button>
        </div>
      );
    }
    else{
      return null
    }
  }

}

export default CRUD;
