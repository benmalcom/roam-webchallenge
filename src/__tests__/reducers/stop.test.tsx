import reducer from '../../redux/reducers/stop';
import * as actions from '../../redux/actions/stop';
const testStops = require('../seed/testStops');

describe('stops reducer', () => {
	const defaultState = {stops: null, error: null};
	it('should return the initial state', () => {
		expect(reducer(defaultState, {type: undefined, payload: {}})).toEqual(defaultState);
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
					cursor: 'c2ltcGxlLWN1cnNvcjI1',
					error: null,
				});
	});

	it('should handle GET_STOPS_FAILURE', () => {
		expect(reducer(defaultState, {
			type: actions.GET_STOPS_FAILURE,
			payload: new Error('error')}))
			.toEqual(
				{
					stops: null, error: new Error('error'),
				});
	});
});