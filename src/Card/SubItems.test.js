import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SubItems from './SubItems';

const minProps = {
  description: 'i am a description',
  price: '1231',
  isUpgrade: false,
};
describe('SubItems', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SubItems {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders an Price component', () => {
    const wrapper = shallow(<SubItems {...minProps} />);
    expect(wrapper.find('Price').length).toEqual(1);
  });
  it('renders an Upgrade component when upgrade is true', () => {
    const wrapper = shallow(<SubItems {...minProps} isUpgrade />);
    expect(wrapper.find('Upgrade').length).toEqual(1);
  });
});
