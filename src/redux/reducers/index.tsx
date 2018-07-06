import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import stopReducer from './stop';
import locationReducer from './location';
import uiReducer from '../reducers/ui';

export default combineReducers({
	stopReducer,
	locationReducer,
	uiReducer,
	router: routerReducer,
});
