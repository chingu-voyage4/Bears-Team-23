import React, { Component } from 'react';

import {getRandomPic,getProfilePics,createPic,updatePic,deletePic} from '../crud/CRUD'

//use below to establish communication bewteen store, Navbar only needs to read from store
import {connect} from 'react-redux';

function mapStateToProps(state){//only reads store state
  return {user: state.user}
}
//..end redux commands

class CRUD extends Component {
  
  async getRandPic(){
    const response = await getRandomPic()
    console.log(response);
  }
  

  async getProfile(){
      const response = await getProfilePics()
      console.log(response)
  }

  async newPic(){

    const samplePic = {
            imgDescription:"test",
            imgLink:"https://",
            timeStamp: Date.now(),
            totalRatings:0,
            avgRating:0,
            voted:[]
    }
    await createPic(samplePic);
    console.log(samplePic);
  }    

  voteOnPic(){
    let user = this.props.user.user.username==="Guest" ? this.props.user.user.userip : this.props.user.user.username
    let oldVotedArr=[] //get old voted arr from current satate of pic being voted on
    let newVotedArr=[...oldVotedArr,user] //add current voteer in old voted array
    let picID = "5aa3c2020f469b12a40a4345" //get this from the current picture that is being voted on
    let updateInfo = {
       totalRatings:15, //increment from current picture ratings
       avgRating:8.2, //compute from current picture ratings
       voted:newVotedArr
    }
    updatePic(picID,updateInfo).then((response)=>{
      console.log(response)
    })
  }

  async removePic(){
      let picID = "5aa3c2020f469b12a40a4345" //get this from the current picture that is being voted on
      const response = await deletePic(picID)
      console.log(response)
  }
  
  render() {
    if(this.props.user.user.authenticated || this.props.user.user.username==="Guest"){
      return (
        <div style={{"width":"80%","margin":"0 auto","marginTop":"50px"}}>
          <button style={{"marginRight":"30px"}} onClick={this.getRandPic.bind(this)}> Get Random Pic </button>
          <button style={{"marginRight":"30px"}} onClick={this.getProfile.bind(this)}> Get Profile Pics </button>
          <button style={{"marginRight":"30px"}} onClick={this.newPic.bind(this)}> Create New Pic </button>
          <button style={{"marginRight":"30px"}} onClick={this.voteOnPic.bind(this)}> Update Pic </button>
          <button onClick={this.removePic.bind(this)}> Delete Pic</button>
        </div>
      );
    }
    else{
      return null
    }
  }

}

export default connect(mapStateToProps)(CRUD);
