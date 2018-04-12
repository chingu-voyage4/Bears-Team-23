import React from 'react';
import DeleteModal from '../DeleteModal';
import Modal from '../DeleteModal';
import props from '../DeleteModal';
import { shallow } from 'enzyme';


it('DeleteModal renders without error', () => {
  const wrapper = shallow(

  <p className = 'modalText' />);

expect(wrapper.contains("Are you sure you want to delete "))

});
