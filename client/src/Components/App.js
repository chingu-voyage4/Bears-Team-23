import React, { Component } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
import AnimalContainer from './AnimalContainer';
import CRUD from './Crudtester'

import "./../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup />
        <AnimalContainer />
        <CRUD />
        <Footer />
      </div>
    );
  }
}

export default App;
