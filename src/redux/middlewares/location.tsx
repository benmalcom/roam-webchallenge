import { GET, RequestAction, sendRequest } from '../actions/request';
import { GET_LOCATION, GET_LOCATION_FAILURE, GET_LOCATION_SUCCESS } from '../actions/location';
const URL = 'https://api.digitransit.fi/geocoding/v1/search';

export const getLocation = ({dispatch}: any) => (next: Function) => (action: RequestAction) => {
	next(action);
	if (action.type === GET_LOCATION) {
		dispatch(
			sendRequest(
				GET,
				URL,
				null,
				action.params,
				GET_LOCATION_SUCCESS,
				GET_LOCATION_FAILURE,
				'/search-results'));
	}
};
