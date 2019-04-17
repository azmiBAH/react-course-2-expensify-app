import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('runinng test', () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
});