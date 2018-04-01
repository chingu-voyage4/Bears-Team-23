import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


it('App renders without error', () => {
  shallow(<App />);
});
