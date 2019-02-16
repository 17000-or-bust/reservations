import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reserve from '../../client/components/Reserve.jsx';

configure({ adapter: new Adapter() });

describe('Reserve component', () => {
  test('renders', () => {
    const wrapper = shallow(<Reserve />);
    expect(wrapper.exists()).toBe(true);
  });
});
