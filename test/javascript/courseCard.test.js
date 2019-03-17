import React from 'react';


import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
configure({ adapter: new Adapter() });


import CourseCard from '../../app/javascript/components/CourseCard';


const setup = (props={}, state=null) => {
    const wrapper = shallow(<CourseCard {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr= (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`).render()
}

test('course card component renders ok', () => {
    const wrapper = setup();
    const courseCardComponent = findByTestAttr(wrapper, 'component-course-card');
    expect(courseCardComponent).lengthOf(1);
});

test('course card name renders ok', () => {
    const wrapper = setup();
    const courseName = findByTestAttr(wrapper, 'course-name');
    expect(courseName).lengthOf(1);
});

test('course card description renders ok', () => {
    const wrapper = setup();
    const courseCardDescription = findByTestAttr(wrapper, 'course-description');
    expect(courseCardDescription).lengthOf(1);
});


test('course card name populates ok', () => {
    const courseName = "Course 1";
    const wrapper = mount(<CourseCard name={courseName} />)
    const courseCardName = findByTestAttr(wrapper, 'course-name');
    expect(courseCardName.text()).to.equal(courseName);
});

test('course card description populates ok', () => {
    const courseDescription = "This is a cool course";
    const wrapper = mount(<CourseCard description={courseDescription} />)
    const courseCardDescription = findByTestAttr(wrapper, 'course-description');
    expect(courseCardDescription.text()).to.equal(courseDescription);
});
