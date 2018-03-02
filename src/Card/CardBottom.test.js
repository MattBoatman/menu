import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardBottom from './CardBottom';

const minProps = {
  color: 'pink',
  title: '',
  price: '',
  moreInformation: {},
};
describe('CardBottom', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CardBottom {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('render a CardTitle, MoreInformationBlock when those are passed in but Price is not', () => {
    const wrapper = shallow(
      <CardBottom
        {...minProps}
        title="boat"
        MoreInformationBlock={{ id: 2 }}
      />,
    );
    expect(wrapper.find('CardTitle').length).toEqual(1);
    expect(wrapper.find('MoreInformationBlock').length).toEqual(1);
    expect(wrapper.find('Price').length).toEqual(0);
  });
});
