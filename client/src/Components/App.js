import React, { Component } from "react";
import {userInfo} from './../crud/CRUD';
import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
import AnimalContainer from './AnimalContainer';

import "./../css/App.css";

class App extends Component {
  render() {
    if(userInfo().authenticated || userInfo().username==="Guest"){
        return (
          <div className="App">
            <Navbar />
            <AnimalContainer />
            <Footer />
          </div>
        );
    }
    else{
      return (
        <div className="App">
          <Navbar />
          <Signup />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
