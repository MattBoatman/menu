import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RenderCards from './RenderCards';

const minProps = {
  clickCard: () => {},
  dataToRender: [],
  selectedItem: {},
};
describe('RenderCards', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RenderCards {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('renders 3 cards components dataToRender has a 3 objects', () => {
    const threeObjects = [
      { categoryId: 1, name: 'boat', imageUrl: 'www.boat.com', color: 'green' },
      { categoryId: 2, name: 'boat', imageUrl: 'www.boat.com', color: 'green' },
      { categoryId: 3, name: 'boat', imageUrl: 'www.boat.com', color: 'green' },
    ];
    const wrapper = shallow(
      <RenderCards {...minProps} dataToRender={threeObjects} />,
    );
    expect(wrapper.find('Card').length).toEqual(3);
  });
});
