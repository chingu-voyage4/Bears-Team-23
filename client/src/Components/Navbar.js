import React from "react";
import "./../css/Navbar.css";
import logo from "./../img/cute_or_not.svg";

//use below to establish communication bewteen store, Navbar only needs to read from store
import {connect} from 'react-redux';

function mapStateToProps(state){//only reads store state
  return {user: state.user}
}
//..end redux commands

class Navbar extends React.Component {
  handleLogin(){//twitter authentication
    window.location="/auth/twitter"
  }
  handleLogout(){//twitter authentication
    window.location="/auth/logout"
  }
  render() {
    if(this.props.user.user.authenticated){
      return (
        <div className="navbar">
          <img src={logo} className="navbar__img" alt="appfavicon"/>
          <button className="navbar__button" onClick={()=>this.handleLogout()}>Logout</button>
        </div>
      );
    }
    else{
      return (
        <div className="navbar">
          <img src={logo} className="navbar__img" alt="appfavicon"/>
          <button className="navbar__button" onClick={()=>this.handleLogin()}>Sign in</button>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Navbar);
