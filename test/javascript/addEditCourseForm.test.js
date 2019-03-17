import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import AddEditCourseForm from '../../app/javascript/components/AddEditCourseForm';



const setup = (props={}, state=null) => {
    const wrapper = shallow(<AddEditCourseForm {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr= (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

test('add/edit course component renders ok', () => {
    const wrapper = setup();
    const addEditCourseForm = findByTestAttr(wrapper, 'component-add-edit-course-form');
    expect(addEditCourseForm.length).toBe(1);
});

test('add/edit course name renders ok', () => {
    const wrapper = setup();
    const addEditCourseName = findByTestAttr(wrapper, 'add-edit-course-name');
    expect(addEditCourseName.length).toBe(1);
});

test('add/edit course description renders ok', () => {
    const wrapper = setup();
    const addEditCourseDescription = findByTestAttr(wrapper, 'add-edit-course-description');
    expect(addEditCourseDescription.length).toBe(1);
});

test('add/edit course submit renders ok', () => {
    const wrapper = setup();
    const addEditCourseSubmit = findByTestAttr(wrapper, 'add-edit-course-submit');
    expect(addEditCourseSubmit.length).toBe(1);
});

test('form name input testing', () => {

    const wrapper = setup()
    const addEditCourseName = findByTestAttr(wrapper, 'add-edit-course-name');
    addEditCourseName.simulate('change', {target: {value: 'Nate'}});
    expect(wrapper.state('name')).toBe('Nate');
});

test('form description input testing', () => {

    const wrapper = setup()
    const addEditCourseName = findByTestAttr(wrapper, 'add-edit-course-description');
    addEditCourseName.simulate('change', {target: {value: 'This is a cool course'}});
    expect(wrapper.state('description')).toBe('This is a cool course');
});