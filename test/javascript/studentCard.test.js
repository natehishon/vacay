import React from 'react';


import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });


import StudentCard from '../../app/javascript/components/StudentCard';


const setup = (props={}, state=null) => {
    const wrapper = shallow(<StudentCard {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr= (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`).render()
}

test('student card component renders ok', () => {
    const wrapper = setup();
    const studentCardComponent = findByTestAttr(wrapper, 'component-student-card');
    expect(studentCardComponent).lengthOf(1);
});

test('student card name renders ok', () => {
    const wrapper = setup();
    const studentName = findByTestAttr(wrapper, 'student-name');
    expect(studentName).lengthOf(1);
});

test('student card email renders ok', () => {
    const wrapper = setup();
    const studentCardEmail = findByTestAttr(wrapper, 'student-email');
    expect(studentCardEmail).lengthOf(1);
});

test('student card courses render ok', () => {
    const wrapper = setup();
    const studentCardCourses = findByTestAttr(wrapper, 'student-courses');
    expect(studentCardCourses).lengthOf(1);
});


test('student card name populates ok', () => {
    const studentName = "Nate";
    const wrapper = mount(<StudentCard name={studentName} />)
    const studentCardName = findByTestAttr(wrapper, 'student-name');
    expect(studentCardName.text()).to.equal(studentName);
});

test('student card email populates ok', () => {
    const studentEmail = "nate@hishon.com";
    const wrapper = mount(<StudentCard email={studentEmail} />)
    const studentCardEmail = findByTestAttr(wrapper, 'student-email');
    expect(studentCardEmail.text()).to.equal(studentEmail);
});

test('student card courses populate ok', () => {
    const classList = ["class1", "class2", "class3"];
    const wrapper = mount(<StudentCard courses={classList} />)
    const studentCardCourses = findByTestAttr(wrapper, 'student-courses');
    expect(studentCardCourses.children()).lengthOf(classList.length);
});