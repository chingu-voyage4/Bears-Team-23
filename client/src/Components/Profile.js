import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfilePets from './ProfilePets';
import './../css/Profile.css';
import { userInfo, getProfilePics, createPic } from './../crud/CRUD';


import "./../css/App.css";

class Profile extends Component {

  state = {
    pets: [],
    petName: '',
    petImgUrl: ''
  }

  componentDidMount() {
    this.getPets()
  }

  getUserName = ()=> {
    const name = userInfo()
    console.log(name)
    return name.displayName;
  }

  getPets = async ()=> {
      const response = await getProfilePics()
      console.log(response);
      this.setState({
        pets: response
      })
  }

  uploadWidget = (e) => {
    e.preventDefault();
    window.cloudinary.openUploadWidget({ cloud_name:'bears23', upload_preset: 'glshf8h1'}, 
    (error, result) => {
        console.log(result);
        this.setState({
          petImgUrl: result[0].path
        })
    });
}


  handleInputChange = (event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  uploadPetImg = async (e)=> {
    e.preventDefault();
    const pics = await createPic({
      petName: this.state.petName,
      imgLink: this.state.petImgUrl,
    });
    console.log(pics)
    this.setState({
      pets: pics
    });
  }


  render() {
    return (
      <div className="ProfileModel">
        <Navbar />

        <div className = "Profile">
        
        <p className = "profile__name">Name: {this.getUserName()}</p>
        
        
        {this.state.pets.map((pet)=> {
          return (
            <ProfilePets imageDescription = {pet.petName}/>
          )
        })}

        <form className = "profile__form">

          <p>Pet Name</p>
          <input 
            type = "text" 
            name = "petName" 
            value = {this.state.petName}
            onChange = {this.handleInputChange}/>
          <p>Upload Picture</p>
          <button onClick = {this.uploadWidget}>Upload Pic</button>
          <button onClick = "uploadPetImg">Upload my animal</button>
        </form>

        </div>



        <Footer />
      </div>
    );
  }
}

export default Profile;
