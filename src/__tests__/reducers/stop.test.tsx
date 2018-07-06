import reducer from '../../redux/reducers/stop';
import * as actions from '../../redux/actions/stop';
import { error, undefinedAction } from '../seed/utils';
const testStops = require('../seed/testStops');

describe('stops reducer', () => {
	const defaultState = {stops: null, error: null};
	it('should return the initial state', () => {
		expect(reducer(defaultState, undefinedAction)).toEqual(defaultState);
	});

	it('should handle GET_STOPS_SUCCESS', () => {
		expect(reducer(defaultState, {
			type: actions.GET_STOPS_SUCCESS,
			payload: testStops}))
			.toEqual(
				{
					stops: [{
						id: 'HSL:1173123',
						name: 'Pasilan asema',
						desc: 'Asemapäällikönkatu',
						distance: 107,
					}],
					pageInfo: {
						hasNextPage: false,
						hasPreviousPage: false,
						startCursor: 'c2ltcGxlLWN1cnNvcjA=',
						endCursor: 'c2ltcGxlLWN1cnNvcjI1'
					},
					error: null,
				});
	});

	it('should handle GET_STOPS_FAILURE', () => {
		expect(reducer(defaultState, {
			type: actions.GET_STOPS_FAILURE,
			payload: error}))
			.toEqual(
				{
					stops: null, error,
				});
	});
});
