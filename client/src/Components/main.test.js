import React from 'react';
import main from './main';
import { shallow } from 'enzyme';


it('aain renders without error', () => {
  shallow(<main />);
});
