import React from 'react';
import Header from '../../components/_App/partials/Header/Header';
import { shallow } from 'enzyme';
describe('<Header />', () => {
	test('Component renders properly', () => {
		const component = shallow(<Header />);
		expect(component).toMatchSnapshot();
	});
});
