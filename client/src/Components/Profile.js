import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfilePets from './ProfilePets';
import './../css/Profile.css';
import { userInfo, getProfilePics } from './../crud/CRUD';


import "./../css/App.css";

class Profile extends Component {

  state = {
    pets: []
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
      this.setState(()=> ({
        pets: response
      }))
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
          <input type = "text" placeholer = "Pet name"/>
          <p>Upload Picture</p>
        </form>

        </div>



        <Footer />
      </div>
    );
  }
}

export default Profile;
