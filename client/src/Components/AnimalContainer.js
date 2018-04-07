import React from 'react';
import './../css/AnimalContainer.css';
import { getRandomPic, updatePic } from './../crud/CRUD';

class AnimalContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPic:null,
        isLoading: false
      };
      this.setRandomPic=this.setRandomPic.bind(this)
    }
    componentDidMount() {
      this.setRandomPic()
    }

    setRandomPic = async ()=> {
      this.setState({isLoading: true});
      const randPic = await getRandomPic();
      this.setState({
        isLoading: false,
        currentPic: randPic,
      })
    }
    voteOnPic = async (value)=> {
      this.setState({isLoading: true});
      const response = await updatePic(this.state.currentPic, value)
      if(response){
        this.setRandomPic()
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

            <div className = 'AnimalContainer__icons'>
              <div onClick = {()=>this.voteOnPic(0)}><i className="fas fa-times-circle"></i></div>
              <div onClick = {this.setRandomPic}><i className="fas fa-step-forward"></i></div>
              <div onClick = {()=>this.voteOnPic(1)}><i className="fas fa-check-circle"></i></div>
            </div>

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
