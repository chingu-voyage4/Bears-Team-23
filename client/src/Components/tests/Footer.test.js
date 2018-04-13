import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';


it('Footer renders without error', () => {
  const wrapper= shallow(<Footer />);

  expect(wrapper.contains("https://chingu-cohorts.github.io/chingu-directory/"))
});
