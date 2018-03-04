import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

const minProps = {
  name: '',
  clearList: () => {},
  clearSelectedItem: () => {},
};

describe('Toolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Toolbar.WrappedComponent {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders two toolbar buttons when a name is passed in', () => {
    const wrapper = shallow(
      <Toolbar.WrappedComponent {...minProps} name="taco" />,
    );
    expect(wrapper.find('ToolbarButton').length).toEqual(2);
  });
});
