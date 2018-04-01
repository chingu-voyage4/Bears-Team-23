import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';


it('Navbar renders without error', () => {
  shallow(<div className="navbar">
    <img  className="navbar__img" alt="appfavicon"/>
    <button className="navbar__button" onClick={()=>this.handleLogout()}>Logout</button>
  </div>);
});
