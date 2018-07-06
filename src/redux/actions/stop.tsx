import { getStopsQuery } from '../../graphql/stop';

export const GET_STOPS = '[STOP] GET_STOPS';
export const GET_STOPS_SUCCESS = '[STOP] GET_STOPS_SUCCESS';
export const GET_STOPS_FAILURE = '[STOP] GET_STOPS_FAILURE';

export const getStops = (payload: any) => ({
	type: GET_STOPS,
	payload: getStopsQuery(payload.lat, payload.long, payload.cursor),
});
