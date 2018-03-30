import React from "react";
import "./../css/Navbar.css";
import logo from "./../img/cute_or_not.svg";
import classnames from 'classnames';
//use below to establish communication bewteen store, Navbar only needs to read from store
import {connect} from 'react-redux';
import onClickOutside from "react-onclickoutside";


function mapStateToProps(state){//only reads store state
  return {user: state.user}
}
//..end redux commands

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  handleLogin(service){//twitter authentication
    window.location="/auth/"+service
  }
  handleLogout(){//twitter authentication
    window.location="/auth/logout"
  }
  linkToProfile(){
    window.location="/profile"
  }

  goHome() {
    window.location="/"
  }

  handleClickOutside = (evt)=> {
    console.log('something');
    this.showDropdown(false);
  }


  getFirstName = () => {
    return this.props.user.user.displayName.split(" ")[0];
  }


  showDropdown = (showDropBool) => {
    this.setState(()=>({
      showDropdown: showDropBool
    }))
  }


  render() {

    let dropdownClass = classnames({
      navbar__dropdown__content: true,
      navbar__dropdown__content__onClick: this.state.showDropdown
    })

    if(this.props.user.user.authenticated){
      return (
        <div className="navbar">
          <img src={logo} className="navbar__img" alt="appfavicon" onClick = {this.goHome}/>
          
          <div className = 'navbar__links'>
            <div className = 'navbar__items'>
              <p className = {'navbar__item'} onClick = {this.linkToProfile}>Profile</p>
              <p className = {'navbar__item'} onClick = {this.handleLogout}>Logout</p>
            </div>

            <div className="navbar__hamburger " onClick = {() => this.showDropdown(true)}><i class="fas fa-bars"></i></div>
              <div className = {dropdownClass}>
                <p className = "navbar__dropdown__content__item" onClick = {this.linkToProfile}>Profile</p>
                <p className = "navbar__dropdown__content__item" onClick = {this.handleLogout}>Logout</p>
            </div>
          </div>
        </div>

      );
    }
    else {
      return (
        <div className="navbar">
          <img src={logo} className="navbar__img" alt="appfavicon" onClick = {this.goHome}/>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(onClickOutside(Navbar));
