import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

const minProps = {
  imageUrl: 'www.image.com',
  title: 'boatman',
  color: 'red',
  clickCard: () => {},
};
describe('Card', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Card {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders an AvatarImage component, CardBottom component, and ErrorBoundary', () => {
    const wrapper = shallow(<Card {...minProps} />);
    expect(wrapper.find('AvatarImage').length).toEqual(1);
    expect(wrapper.find('CardBottom').length).toEqual(1);
    expect(wrapper.find('ErrorBoundary').length).toEqual(1);
  });
});
