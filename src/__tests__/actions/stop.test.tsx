import * as actions from '../../redux/actions/stop';
import {getStopsQuery} from '../../graphql/stop';

describe('Location actions', () => {
	it('should create a getStops action', () => {
		const obj = {
			lat: 60.03442,
			long: 15.7877,
			cursor: null,
		};
		const expectedAction = {
			type: actions.GET_STOPS,
			payload: getStopsQuery(obj.lat, obj.long, obj.cursor),
		};
		expect(actions.getStops(obj)).toEqual(expectedAction);
	});
});
