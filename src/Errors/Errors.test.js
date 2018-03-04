import React from 'react';
import { shallow} from 'enzyme';
import Errors from './Errors';


const minProps = {
    error: 'true',
};
describe('<Errors />', () => {
    it('Renders without blowing up', () => {
        const wrapper = shallow(<Errors.WrappedComponent {...minProps} />);
        expect(wrapper.length).toEqual(1);
    });
    it('If error is false dont render and error message', () => {
        const wrapper = shallow(<Errors.WrappedComponent {...minProps} error={false} />);
        expect(wrapper.find('#error').length).toEqual(0);
    });
    it('If error is true render an error', () => {
        const wrapper = shallow(<Errors.WrappedComponent {...minProps} error={true} />);
        expect(wrapper.find('#error').length).toEqual(1);
    });
});
