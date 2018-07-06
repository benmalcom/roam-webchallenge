import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Home from '../../components/Home/Home';
import { Provider } from 'react-redux';

describe('<Home />', () => {
	const mockStore = configureStore();
	const initialState = {location: null, error: null};
	let store;
	let props;
	let component;
	beforeEach(() => {
		store = mockStore(initialState);
		props = {
			getLocation: jest.fn(() => 'getLocation'),
			loading: false,
			location: null,
		};
		component = shallow(<Provider store={store}><Home {...props} /></Provider>);
		component.setState({inputValue: ''});

	});

	test('Component renders without crash', () => {
		expect(component).toMatchSnapshot();
	});
	test('Component renders with initial props', () => {
		expect(component.props().getLocation).toBeDefined();
		expect(component.props().loading).toBeFalsy();
		expect(component.props().location).toBeNull();
	});
});
