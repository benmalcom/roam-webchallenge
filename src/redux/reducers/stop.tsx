import { GET_STOPS_SUCCESS, GET_STOPS_FAILURE } from '../actions/stop';
import { Action } from 'redux';

interface StopAction extends Action {
	payload: object;
}

const stopReducer = (state = {stops: null, error: null }, action: StopAction) => {
	switch (action.type) {
		case GET_STOPS_SUCCESS:
			const {data: {stopsByRadius: {edges, pageInfo}}} = action.payload as any;
			const stops = edges.map(({ node: { stop: { gtfsId, name, desc }, distance }}) => {
				return {
					id: gtfsId, name, desc, distance,
				};
			});
			console.log('pageInfo ', pageInfo);
			return Object.assign({}, state, { stops, pageInfo  });
		case GET_STOPS_FAILURE:
			return Object.assign({}, state, { error: action.payload });
		default:
			return state;
	}
};

export default stopReducer;
