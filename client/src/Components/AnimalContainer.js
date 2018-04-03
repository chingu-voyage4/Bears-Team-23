import React from 'react';
import './../css/AnimalContainer.css';
import { getRandomPic, updatePic } from './../crud/CRUD';

class AnimalContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPic:null,
        isLoading: false,
        showSkip: true
      };
      this.setRandomPic=this.setRandomPic.bind(this)
    }
    componentDidMount() {
      this.setRandomPic()
    }
    componentWillUnmount() {
      clearTimeout(this.timer)
    }
    setRandomPic = async ()=> {
      clearTimeout(this.timer)
      this.setState({isLoading: true});
      const randPic = await getRandomPic();
      this.setState({
        isLoading: false,
        currentPic: randPic,
        showSkip: true
      })
    }
    voteOnPic = async (value)=> {
      const response = await updatePic(this.state.currentPic, value)
      if(response){
        this.setState({
          currentPic: response,
          isLoading: false,
          showSkip: false
        });
        this.timer = setTimeout(()=>this.setRandomPic(), 1300)
      }
    }

    getAnimalContainerIcons() {
      if (this.state.currentPic.votable) {
        return (
        <div className = 'AnimalContainer__icons'>
          <div onClick = {()=>this.voteOnPic(0)}><i className="fas fa-times-circle"></i></div>
          <div onClick = {this.setRandomPic}><i className="fas fa-step-forward"></i></div>
          <div onClick = {()=>this.voteOnPic(1)}><i className="fas fa-check-circle"></i></div>
        </div>
        )
      }
      else if(!this.state.currentPic.votable && this.state.showSkip) {
        return (
        <div className = 'AnimalContainer__icons'>
          <p className = "AnimalContainer__icons__rating">Cuteness Rating: {Math.round(this.state.currentPic.avgRating * 100, 2)}%</p>
          <div onClick = {this.setRandomPic}><i className="fas fa-step-forward skipButton"></i></div> 
        </div>
        )
      }
      else if (!this.state.currentPic.votable && !this.state.showSkip) {
        return (
        <p className = "AnimalContainer__icons__rating__after">Cuteness Rating: {Math.round(this.state.currentPic.avgRating * 100, 2)}%</p>
        )
      }
    }


    render() {
      if(this.state.currentPic && !this.state.isLoading){
        return (
          <div className = "AnimalContainer">
          <img
            src = {this.state.currentPic.imgLink}
            className = "AnimalContainer__img"
            alt = ""
            onError={this.setRandomPic}/>
          <p className = "AnimalContainer__petName">{this.state.currentPic.petName}</p>
          {this.getAnimalContainerIcons()}
          </div>
        )
      }
      else if (this.state.currentPic && this.state.isLoading) {
        return (
          <div className = 'AnimalContainer'>
            <div className = 'AnimalContainer__imageAreaLoading' />
          </div>
        )
      }

      else {
        return(
          <div className = 'AnimalContainer'>
            <p>No Pets Found !!</p>
          </div>
        )
      }
    }
}

export default AnimalContainer;
