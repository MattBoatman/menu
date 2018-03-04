import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AvatarImage from './AvatarImage';

const minProps = {
  imageUrl: 'I am a title',
  enlargeImage: false,
};
describe('AvatarImage', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AvatarImage {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});
