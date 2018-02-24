import React from "react";
import "./../css/Signup.css";

export default class Signup extends React.Component {
  render() {
    return (
      <div className="signup">
        <div className="signup__user">
          It's like Hot or Not,<br /> but for pets
          <button className="signup__button">
            <i class="fab fa-twitter" />
            Sign up via Twitter
          </button>
        </div>
        <div className="signup__nonuser">
          <p>
            Or, if you don't want to post adorable pictures of your pet, just
            continue as a <a href="#">guest</a>.
          </p>
        </div>
      </div>
    );
  }
}
