import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

const minProps = {
  message: 'i am message',
};
describe('<Notification />', () => {
  it('Renders without blowing up', () => {
    const wrapper = shallow(<Notification {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});
