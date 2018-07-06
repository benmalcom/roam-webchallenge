import { POST, RequestAction, sendRequest } from '../actions/request';
import { GET_STOPS, GET_STOPS_FAILURE, GET_STOPS_SUCCESS } from '../actions/stop';
const URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

export const getStops = ({dispatch}: any) => (next: Function) => (action: RequestAction) => {
	next(action);
	if (action.type === GET_STOPS) {
		dispatch(
			sendRequest(
				POST,
				URL,
				action.payload,
				null,
				GET_STOPS_SUCCESS,
				GET_STOPS_FAILURE,
				null));
	}
};
