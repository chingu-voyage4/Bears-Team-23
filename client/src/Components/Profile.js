import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PetsView from "./PetsView";
import './../css/Profile.css'

import "./../css/App.css";

class Profile extends Component {
  render() {
    return (
      <div className="ProfileModel">
        <Navbar />

        <div className = "Profile">


        <div className = "userview">
                <div className = "displayusername">
                  <div className = "namecontainer">{this.props.name}
                  </div>
                    <PetsView petsname = "pookie" />
                </div>
              </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
