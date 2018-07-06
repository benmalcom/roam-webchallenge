import React from 'react';
import Message from '../../components/_App/partials/Message/Message';
import { mount } from 'enzyme';
describe('<Message />', () => {
	let props;
	let component;

	beforeEach(() => {
		props = {
			message: 'message',
			error: false,
		};
	});
	test('Component renders properly with props',  () => {
		component = mount(<Message {...props}/>);
		expect(component).toMatchSnapshot();
		expect(component.prop('message')).toEqual(props.message);
		expect(component.prop('error')).toBeFalsy();
	});
});
