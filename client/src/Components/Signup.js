import React from "react";
import "./../css/Signup.css";

//use below to establish communication bewteen store and individual component
import { connect } from "react-redux";

function mapStateToProps(state) {
  //only reads store state
  return state;
}
//..end redux commands

class Signup extends React.Component {
  handleLogin() {
    //twitter authentication
    window.location = "/auth/twitter";
  }
  render() {
        return (
          <div className="signup">
            <div className="signup__user">
              It's like Hot or Not,<br /> but for pets
              <button
                className="signup__button"
                onClick={() => this.handleLogin()}
              >
                <i className="fab fa-twitter" />
                Sign up via Twitter
              </button>
            </div>
            <div className="signup__nonuser">
              <p>
              {this.props.user.user.displayName} 
                Or, if you don't want to post adorable pictures of your pet,
                just continue as a{" "}
                <span
                  className="signup__nonuser__link"
                >
                  guest
                </span>.
              </p>
            </div>
          </div>
        );
      }
  }

export default connect(mapStateToProps)(Signup);
