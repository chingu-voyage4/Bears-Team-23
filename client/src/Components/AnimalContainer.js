import React from 'react';
import './../css/AnimalContainer.css';
import { getRandomPic, updatePic } from './../crud/CRUD';

class AnimalContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPic:null
      };
      this.picReady = this.picReady.bind(this)
    }
    componentDidMount() {
      this.setRandomPic()
    }
    
    setRandomPic = async ()=> {
      const randPic = await getRandomPic()
      this.setState({
        currentPic: randPic,
      })
    }
    handleVoteInput(e){
      this.setState({
        inputVoteValue:e.target.value
      })
    }
    async voteOnPic(){
      const response = await updatePic(this.state.currentPic,this.state.inputVoteValue)
      if(response){
        this.setRandomPic()
      }
    }
    picReady(){
      this.setState({
        loadedPic:{
          holderDiv:'AnimalContainer__imageArea',
          image:'AnimalContainer__imageArea__randompetimage'
        }
      })
    }
    render() {
      if(this.state.currentPic){
        return (
          <div className = "AnimalContainer">
            <p className = "AnimalContainer__petName">{this.state.currentPic.petName}</p>
            <img src = {this.state.currentPic.imgLink} className = "AnimalContainer__img"/>
            <div className = 'AnimalContainer__icons'>
              <div onClick = {this.setRandomPic}><i className="fas fa-times-circle"></i></div>
              <div onClick = {this.setRandomPic}><i className="fas fa-step-forward"></i></div>
              <div onClick = {this.setRandomPic}><i className="fas fa-check-circle"></i></div>
            </div>
          </div>
        )
      }
          
      else {
        return(
          <div className = 'AnimalContainer'>
            <p>No more Picures to Vote on !!</p>
          </div>
        )
      }
    }
}

export default AnimalContainer;
