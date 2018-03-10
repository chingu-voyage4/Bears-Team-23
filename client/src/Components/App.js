import React, { Component } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
import AnimalContainer from './AnimalContainer';

import "./../css/App.css";
import Upload from "./Upload";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup />
        <Upload />
        <AnimalContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
