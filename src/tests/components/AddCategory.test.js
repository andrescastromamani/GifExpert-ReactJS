import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should call setCategories and add the new category', () => {
        const input = wrapper.find('input');
        const value = 'Hola';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text()).toBe(value);
    })
    test('Submit form', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('should executed setCategories and  clear the input', () => {
        const value = 'Hola';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //Verify clear input
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})