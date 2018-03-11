import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PetView from "./PetView";
import './../css/PetsView.css'

import "./../css/App.css";

class PetsView extends Component {
  render() {
    return (
      <div className="ProfileModel">
        <Navbar />

        <div className = "PetsViewCSS">
         <div className = "displayallpets">
            <div className = "petsview">
                <PetView petname = {this.props.petsname}/>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PetsView;
