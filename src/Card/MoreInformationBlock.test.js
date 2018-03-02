import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MoreInformationBlock from './MoreInformationBlock';

const minProps = {
  moreInformation: {
    description: 'hello',
    subItems: [{ description: 'howdy' }, { description: 'howdy' }],
    upgrades: {},
  },
};
describe('MoreInformationBlock', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MoreInformationBlock {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('render a 1 MoreInformationDescription and 2 SubItems when description is passed in and an 2 objects are passed in for subItems', () => {
    const wrapper = shallow(
      <MoreInformationBlock
        {...minProps}
        title="boat"
        MoreInformationBlock={{ id: 2 }}
      />,
    );
    expect(wrapper.find('MoreInformationDescription').length).toEqual(1);
    expect(wrapper.find('SubItems').length).toEqual(2);
  });
});
