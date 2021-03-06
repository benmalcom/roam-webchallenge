import { GET_LOCATION_SUCCESS, GET_LOCATION_FAILURE } from '../actions/location';
import { Action } from 'redux';

interface LocationAction extends Action {
	payload: object;
}

interface Location {
	bbox: number[];
	features: Array<{
		geometry: {
			type: string;
			coordinates: number[];
		};
		properties: object;
		type: string;
	}>;
	geocoding: any;
	type: string;
}

const locationReducer = (state = {location: null, error: null}, action: LocationAction) => {
	switch (action.type) {
		case GET_LOCATION_SUCCESS:
			const {features} = action.payload as Location;
			if (features && features.length) {
				const {geometry: {coordinates}} = features[0];
				return Object.assign({}, state, {location: coordinates});
			}
			return state;
		case GET_LOCATION_FAILURE:
			return Object.assign({}, state, {error: action.payload});
		default:
			return state;
	}
};

export default locationReducer;
