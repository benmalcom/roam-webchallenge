import React from 'react';
import Loader from '../../components/_App/partials/Loader/Loader';
import { shallow } from 'enzyme';
describe('<Loader />', () => {
	test('Component renders properly', () => {
		const component = shallow(<Loader />);
		expect(component).toMatchSnapshot();
	});
});
