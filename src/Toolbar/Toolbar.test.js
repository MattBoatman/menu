import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

const minProps = {
  hasListData: true,
  hasCategoryData: false,
  clearList: () => {},
  clearSelectedItem: () => {},
};

describe('Toolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Toolbar {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders one toolbar button when only one bool is true', () => {
    const wrapper = shallow(<Toolbar {...minProps} />);
    expect(wrapper.find('ToolbarButton').length).toEqual(1);
  });
});
