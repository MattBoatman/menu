import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Price from './Price';

const minProps = {
    Price: '1.0000000000'
};
describe('Price', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Price {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});
