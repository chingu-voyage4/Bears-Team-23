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
    voteOnPic = async (value)=> {
      console.log(value);
      const response = await updatePic(this.state.currentPic, value)
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
          <img src = {this.state.currentPic.imgLink} className = "AnimalContainer__img" alt = ""/>
            <p className = "AnimalContainer__petName">{this.state.currentPic.petName}</p>

            <div className = 'AnimalContainer__icons'>
              <div onClick = {()=>this.voteOnPic(0)}><i className="fas fa-times-circle"></i></div>
              <div onClick = {this.setRandomPic}><i className="fas fa-step-forward"></i></div>
              <div onClick = {()=>this.voteOnPic(1)}><i className="fas fa-check-circle"></i></div>
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
