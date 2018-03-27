import React from 'react';
import './../css/AnimalContainer.css';
import { getRandomPic, updatePic } from './../crud/CRUD';

class AnimalContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPic:'',
        inputVoteValue:5,
        loadedPic:{
          holderDiv:'AnimalContainer__imageAreaLoading',
          image:'AnimalContainer__imageArea__randompetimageHidden'
        }
      };
      this.setRandomPic=this.setRandomPic.bind(this)
      this.picReady = this.picReady.bind(this)
    }
    componentDidMount() {
      this.setRandomPic()
    }
    async setRandomPic(){
      const randPic = await getRandomPic()
      if(!randPic || randPic._id===this.state.currentPic._id){//leave image loaded if same pic as before
        this.setState({
          currentPic: randPic,
          inputVoteValue: 5
        })
      }
      else{
        this.setState({
          currentPic: randPic,
          inputVoteValue: 5,
          loadedPic:{
            holderDiv:'AnimalContainer__imageAreaLoading',
            image:'AnimalContainer__imageArea__randompetimageHidden'
          }
        })
      }
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
                  <div className = 'AnimalContainer'>
                    <div className= {this.state.loadedPic.holderDiv}>
                      <img
                        className={this.state.loadedPic.image}
                        src={this.state.currentPic.imgLink}
                        onLoad={this.picReady}
                        onError={this.setRandomPic}
                        alt=""
                      />
                    </div>

                    <div className = 'AnimalContainer__controls'>
                      <div className = 'AnimalContainer__controls__top'>
                        <div className = 'AnimalContainer__controls__petinfo'>
                          <p>Name: {this.state.currentPic.petName}</p>
                          <p>Owner: {"@"+this.state.currentPic.owner}</p>
                          <p>Votes: {this.state.currentPic.totalRatings}</p>
                          <p>Rating: {this.state.currentPic.avgRating.toFixed(1)}</p>
                        </div>
                        <button className = 'AnimalContainer__controls__skip' onClick={this.setRandomPic}><i className="fas fa-step-forward" /></button>
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
