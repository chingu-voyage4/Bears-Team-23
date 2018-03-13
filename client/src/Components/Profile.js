import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfilePets from './ProfilePets';
import classnames from 'classnames';
import { userInfo, getProfilePics, createPic } from './../crud/CRUD';
import './../css/Profile.css';


import "./../css/App.css";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      petName: '',
      petImgUrl: ''
    }
  }

  componentDidMount() {
    this.getPets()
  }

  getUserName = ()=> {
    const name = userInfo()
    return name.displayName;
  }

  getPets = async ()=> {
      const response = await getProfilePics()
      console.log(response);
      this.setState({
        pets: response
      })
  }

  petArray(){
    return this.state.pets.map((pet)=> {
      return (
        <ProfilePets 
          key={pet._id} 
          petName = {pet.petName} 
          imgLink = {pet.imgLink}
        />
      )
    })
  }

  uploadWidget = (e) => {
    e.preventDefault();
    window.cloudinary.openUploadWidget({ cloud_name:'bears23', upload_preset: 'glshf8h1'}, 
    (error, result) => {
        this.setState({
          petImgUrl: result[0].secure_url
        })
    });
}


  handleInputChange = (event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  uploadPet = async (e)=> {
    e.preventDefault();
    const pic = await createPic({
      petName: this.state.petName,
      imgLink: this.state.petImgUrl,
    });
    const newProfilePics = [...this.state.pets,pic] //add the new picture to the users existing picture list
    this.setState({
      pets: newProfilePics
    });
  }


  checkFormCompletion(){
    if (this.state.petImgUrl && this.state.petName){
      return false;
    }
    else {
      return true;
    }
  }

  render() {

    let submitClass = classnames({
      profile__pet__form__submit: true,
      profile__pet__form__submit__hidden: this.checkFormCompletion(),
      profile__pet__form__button: true
    })


    return (
      <div className="ProfileModel">
        <Navbar />

        <div className = "Profile">
          <p className = "profile__name">Hi there, {this.getUserName()}</p>
          <div className = 'profile__pet'>
            <div className = "profile__pet__render">
                {this.petArray()}
            </div>
              
            <div className = "profile__pet__form">
              <p className = "profile__pet__form__title">Add a new pet!</p>
              <p>Pet Name</p>
              
              <input 
                type = "text" 
                name = "petName" 
                className = "profile__pet__form__nameInput"
                value = {this.state.petName}
                onChange = {this.handleInputChange}
              />
              
              <button onClick = {this.uploadWidget} className = "profile__pet__form__upload profile__pet__form__button">
              {this.state.petImgUrl ? "Change picture" : "Add a picture"}
              </button>
              
              { this.state.petImgUrl &&
                <img src = {this.state.petImgUrl} className = "profile__pet__form__thumbnail"/>
              }
              <button onClick = {this.uploadPet} className = {submitClass}>Rate my Pet!</button>  
   
              
            </div>
          </div>
        </div>



        <Footer />
      </div>
    );
  }
}

export default Profile;
