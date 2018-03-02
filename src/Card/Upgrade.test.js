import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Upgrade from './Upgrade';

const minProps = {
  description: 'i am a description',
  isUpgrade: false,
};
describe('Upgrade', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Upgrade {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});
