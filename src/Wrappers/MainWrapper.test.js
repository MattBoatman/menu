import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MainWrapper from './MainWrapper';

const minProps = {
  selectedCategory: {},
  selectedItem: {},
  listData: [],
  categories: [],
  getListOfCategories: () => {},
  selectCategory: () => {},
  getListOfItems: () => {},
  getItem: () => {},
};
describe('MainWrapper', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MainWrapper.WrappedComponent {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
  it('contains a Toolbar component', () => {
    const wrapper = shallow(<MainWrapper.WrappedComponent {...minProps} />);
    expect(wrapper.find('Toolbar').length).toEqual(1);
  });
  it('renders 1 RenderCard components when selectedCategory is empty and categories has a single object', () => {
    const singleObject = [
      { categoryId: 1, name: 'boat', imageUrl: 'www.boat.com', color: 'green' },
    ];
    const wrapper = shallow(
      <MainWrapper.WrappedComponent {...minProps} categories={singleObject} />,
    );
    expect(wrapper.find('RenderCards').length).toEqual(1);
  });
});
