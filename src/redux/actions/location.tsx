export const GET_LOCATION = '[LOCATION] Get location';
export const GET_LOCATION_SUCCESS = '[LOCATION] Get location success';
export const GET_LOCATION_FAILURE = '[LOCATION] Get location failure';

export const getLocation = (text: string) => ({
	type: GET_LOCATION,
	params: {text, size: 1},
});
