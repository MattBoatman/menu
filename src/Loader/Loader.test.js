import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';
import Notification from '../Notification/Notification';

const minProps = {
  isFetching: 'true',
};
describe('<Loader />', () => {
  it('Renders without blowing up', () => {
    const wrapper = shallow(<Loader.WrappedComponent {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('If isFetching is false dont render a notification', () => {
    const wrapper = shallow(
      <Loader.WrappedComponent {...minProps} isFetching={false} />,
    );
    expect(wrapper.find(Notification).length).toEqual(0);
  });
  it('If isFetching is true render a notification', () => {
    const wrapper = shallow(
      <Loader.WrappedComponent {...minProps} isFetching={true} />,
    );
    wrapper.setState({ show: true });
    expect(wrapper.find(Notification).length).toEqual(1);
  });
});
