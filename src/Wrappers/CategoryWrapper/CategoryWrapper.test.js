import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CategoryWrapper from './CategoryWrapper';

const minProps = {
    isFetching: false,
    getListOfCategories: ()=>{},
    categories: []
}
describe('CategoryWrapper', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CategoryWrapper.WrappedComponent {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});
