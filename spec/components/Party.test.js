import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Party from '../../client/components/Party.jsx';

configure({ adapter: new Adapter() });

describe('Party component', () => {
  test('renders', () => {
    const wrapper = shallow(<Party />);
    expect(wrapper.exists()).toBe(true);
  });
});
