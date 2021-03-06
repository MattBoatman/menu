import React from 'react';
import { shallow } from 'enzyme';
import Errors from './Errors';
import Notification from '../Notification/Notification';

const minProps = {
  error: 'true',
};
describe('<Errors />', () => {
  it('Renders without blowing up', () => {
    const wrapper = shallow(<Errors.WrappedComponent {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('If error is false dont render a notification', () => {
    const wrapper = shallow(
      <Errors.WrappedComponent {...minProps} error={false} />,
    );
    expect(wrapper.find(Notification).length).toEqual(0);
  });
  it('If error is true render a notification', () => {
    const wrapper = shallow(
      <Errors.WrappedComponent {...minProps} error={true} />,
    );
    wrapper.setState({ show: true });
    expect(wrapper.find(Notification).length).toEqual(1);
  });
});
