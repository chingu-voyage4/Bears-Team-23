import React from 'react';
import Signup from '../Signup';
import { shallow } from 'enzyme';



it('Signup renders without error', () => {
  //const wrapper = shallow(<Signup />).dive();
  const wrapper = shallow(<div className="signup">
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
        Or, if you don't want to post adorable pictures of your pet,
        just continue as a{" "}
        <span
          className="signup__nonuser__link"
          onClick={() => this.handleGuest()}
        >
          guest
        </span>.
      </p>
    </div>
  </div>);
});

it('signup_user renders without error', () => {
  const wrapper = shallow(

  <div className="signup__user" />);

expect(wrapper.contains("It's like Hot or Not,<br /> but for pets"))

});
