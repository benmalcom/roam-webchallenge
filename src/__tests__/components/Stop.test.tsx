import React from 'react';
import Stop from '../../components/SearchResults/Stop/Stop';
import { mount } from 'enzyme';
describe('<Stop />', () => {
	let props;
	let component;

	beforeEach(() => {
		props = {
			name: 'A new location',
			desc: 'This is the description',
			distance: 112,
		};
	});
	test('Component renders properly with props',  () => {
		component = mount(<Stop {...props}/>);
		expect(component).toMatchSnapshot();
		expect(component.prop('name')).toEqual(props.name);
		expect(component.prop('desc')).toEqual(props.desc);
		expect(component.prop('distance')).toEqual(props.distance);
	});
});
