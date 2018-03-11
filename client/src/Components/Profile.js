import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './../css/Profile.css'

import "./../css/App.css";

class Profile extends Component {
  render() {
    return (
      <div className="ProfileModel">
        <Navbar />

        <div className = "Profile">
        
        <p className = "conPlaceholder">This is where the profile goes</p>

        </div>



        <Footer />
      </div>
    );
  }
}

export default Profile;
