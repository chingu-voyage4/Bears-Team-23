import React from 'react';
import './../css/AnimalContainer.css';
import { getRandomPic, updatePic } from './../crud/CRUD';

class AnimalContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPic:null,
        inputVoteValue:5
      };
    }
    componentDidMount() {
      this.setRandomPic()
    }
    async setRandomPic(){
      const randPic = await getRandomPic()
      this.setState({
        currentPic: randPic,
        inputVoteValue: 5
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
    render() {

            if(this.state.currentPic){
              return (
                  <div className = 'AnimalContainer'>
                    <div className= 'AnimalContainer__imageArea'>
                      <img className='AnimalContainer__imageArea__randompetimage' src={this.state.currentPic.imgLink} alt=""/>
                    </div>

                    <div className = 'AnimalContainer__controls'>
                      <div className = 'AnimalContainer__controls__petinfo'>
                        <p>Name: {this.state.currentPic.petName}</p>
                        <p>Votes: {this.state.currentPic.totalRatings}</p>
                        <p>Rating: {this.state.currentPic.avgRating.toFixed(1)}</p>
                      </div>
                      <button className = 'AnimalContainer__controls__skip' onClick={this.setRandomPic.bind(this)}><i className="fas fa-step-forward" /></button>
                      <div className="AnimalContainer__controls__inputarea">
                        <p>Rate</p>
                        <input
                          className="AnimalContainer__controls__inputarea__slider"
                          type="range"
                          min="0"
                          max="10"
                          onChange={this.handleVoteInput.bind(this)}
                          value={this.state.inputVoteValue}
                        />
                        <p>{this.state.inputVoteValue}</p>
                      </div>
                    </div>
                    <button className = 'AnimalContainer__vote' onClick={this.voteOnPic.bind(this)}>Vote!</button>
                  </div>
              )
            }
          else{
            return(
              <div className = 'AnimalContainer'>
                <p>No more Picures to Vote on !!</p>
              </div>
            )
          }
    }
}

export default AnimalContainer;
