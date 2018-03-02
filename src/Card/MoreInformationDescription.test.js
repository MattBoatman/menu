import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MoreInformationDescription from './MoreInformationDescription';

const minProps = {
  description: 'hello',
};
describe('MoreInformationDescription', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MoreInformationDescription {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});
