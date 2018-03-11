import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './../css/PetView.css'

import "./../css/App.css";

class PetView extends Component {
  render() {
    return (
      <div className="PetViewCSS">
        <Navbar />

        <div className = "PetView">

        <div className = "petview">
         <div>
           <div className = "petname"> {this.props.petname}</div>
          <div className = "image"></div>
          <div>
            <div>
              Pet Rating: 80%
            </div>
            <div>
              <button className="signup__button" onClick={() => this.handleDelete()} >
                      <i className="fab fa-twitter" />
                      Delete
                    </button>
              </div>
            </div>
         </div>
        </div>

        </div>



        <Footer />
      </div>
    );
  }
}

export default PetView;
