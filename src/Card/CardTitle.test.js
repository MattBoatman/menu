import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardTitle from './CardTitle';

const minProps = {
  title: 'I am a title',
};
describe('CardTitle', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CardTitle {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});
