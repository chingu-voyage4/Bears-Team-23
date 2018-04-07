import React from 'react';
import DeleteModal from './DeleteModal';
import { shallow } from 'enzyme';


it('DeleteModal renders without error', () => {
  shallow(<DeleteModal />);
});
