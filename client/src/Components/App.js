import React, { Component } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";

import "./../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default App;
