import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';


it('Footer renders without error', () => {
  shallow(<Footer />);
});
