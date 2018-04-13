import React from 'react';
import main from '../main';
import { shallow } from 'enzyme';


it('aain renders without error', () => {
  const wrapper = shallow(<main />);

  expect(wrapper.contains("if(this.state.ready){return (<div>{this.props.children}</div>)}"))
});
