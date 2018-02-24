import React from "react";
import "./../css/Navbar.css";
import logo from "./../img/cute_or_not.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} className="navbar__img" />
        <button className="navbar__button">Sign in</button>
      </div>
    );
  }
}

export default Navbar;
