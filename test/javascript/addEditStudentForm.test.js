import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import AddEditStudentForm from '../../app/javascript/components/AddEditStudentForm';



const setup = (props={}, state=null) => {
    const wrapper = shallow(<AddEditStudentForm {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr= (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

test('add/edit student component renders ok', () => {
    const wrapper = setup();
    const addEditStudentForm = findByTestAttr(wrapper, 'component-add-edit-student-form');
    expect(addEditStudentForm.length).toBe(1);
});

test('add/edit student name renders ok', () => {
    const wrapper = setup();
    const addEditStudentName = findByTestAttr(wrapper, 'add-edit-student-name');
    expect(addEditStudentName.length).toBe(1);
});

test('add/edit student email renders ok', () => {
    const wrapper = setup();
    const addEditStudentEmail = findByTestAttr(wrapper, 'add-edit-student-email');
    expect(addEditStudentEmail.length).toBe(1);
});

test('add/edit student submit renders ok', () => {
    const wrapper = setup();
    const addEditStudentSubmit = findByTestAttr(wrapper, 'add-edit-student-submit');
    expect(addEditStudentSubmit.length).toBe(1);
});

test('form name input testing', () => {

    const wrapper = setup()
    const addEditStudentName = findByTestAttr(wrapper, 'add-edit-student-name');
    addEditStudentName.simulate('change', {target: {value: 'Nate'}});
    expect(wrapper.state('name')).toBe('Nate');
});

test('form email input testing', () => {

    const wrapper = setup()
    const addEditStudentName = findByTestAttr(wrapper, 'add-edit-student-email');
    addEditStudentName.simulate('change', {target: {value: 'This is a cool student'}});
    expect(wrapper.state('email')).toBe('This is a cool student');
});