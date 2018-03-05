import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ToolbarButton from './ToolbarButton';

const minProps = {
  text: 'list',
  onClick: () => {},
};
describe('ToolbarButton', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ToolbarButton {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders correct name', () => {
    const wrapper = shallow(<ToolbarButton {...minProps} />);
    expect(wrapper.text()).toEqual('list');
  });
});
