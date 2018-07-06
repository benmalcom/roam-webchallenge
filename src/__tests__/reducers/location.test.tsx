import reducer from '../../redux/reducers/location';
import * as actions from '../../redux/actions/location';
import { error, undefinedAction } from '../seed/utils';
const testLocation = require('../seed/testLocation');

describe('location reducer', () => {
	const defaultState = {location: null, error: null};
	it('should return the initial state', () => {
		expect(reducer(defaultState, undefinedAction)).toEqual(defaultState);
	});

	it('should handle GET_LOCATION_SUCCESS', () => {
		expect(reducer(defaultState, {
			type: actions.GET_LOCATION_SUCCESS,
			payload: testLocation}))
			.toEqual(
			{
				location: [24.93119, 60.16887], error: null,
			});
	});

	it('should handle GET_LOCATION_FAILURE', () => {
		expect(reducer(defaultState, {
			type: actions.GET_LOCATION_FAILURE,
			payload: new Error('error')}))
			.toEqual(
			{
				location: null, error,
			});
	});
});
