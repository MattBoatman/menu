import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MainWrapper from './MainWrapper';

describe('MainWrapper', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MainWrapper />);
    expect(wrapper.length).toEqual(1);
  });
  it('contains a Toolbar component', () => {
    const wrapper = shallow(<MainWrapper />);
    expect(wrapper.find('Toolbar').length).toEqual(1);
  });
});
