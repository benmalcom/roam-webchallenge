import { Action } from 'redux';
import { SHOW_LOADER, HIDE_LOADER } from '../actions/ui';

const uiReducer = (state: object = {loading: false}, action: Action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return Object.assign({}, state, {loading: true});
		case HIDE_LOADER:
			return Object.assign({}, state, {loading: false});
		default:
			return state;
	}
};

export default uiReducer;
