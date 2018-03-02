import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

const minProps = {
  title: 'Boatman',
};

describe('Toolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Toolbar {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('render title that was specified in the prop', () => {
    const wrapper = shallow(<Toolbar {...minProps} />);
    expect(wrapper.find('span.title').text()).toEqual(minProps.title);
  });
});
