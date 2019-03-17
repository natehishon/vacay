import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import StudentCard from '../../app/javascript/components/StudentCard';

const courses1 = [];
const wrapper = shallow(<StudentCard  name="nate!"  email="nate@yo.com"  courses={courses1} />);

test('1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2);
    const asd = <div>asd</div>;
});

test('2 + 1 equals 2', () => {
    expect(3 + 1).toBe(4);
    const asd = <div>asd</div>;
});