import axios, { AxiosRequestConfig } from 'axios';
import { replace } from 'react-router-redux';
import _ from 'underscore';
import { hideLoader, showLoader } from '../actions/ui';
import { RequestAction } from '../actions/request';

export const REQUEST = '[app] REQUEST';

export const sendRequest = ({dispatch}: any) => (next: Function) => async (action: RequestAction) => {

	if (action.type === REQUEST) {
		dispatch(showLoader());
		const {method, url, onSuccess, onError, nextUrl} = action.meta;
		const config: AxiosRequestConfig = {method, url};
		if (action.payload && !_.isEmpty(action.payload)) {
			config.data = action.payload;
		}
		if (action.params && !_.isEmpty(action.params)) {
			config.params = action.params;
		}

		try {
			const {data} = await axios.request(config);
			dispatch(hideLoader());
			const obj: any = {type: onSuccess, payload: data};
			dispatch(obj);
			if (nextUrl) {
				dispatch(replace(nextUrl));
			}
		} catch (e) {
			dispatch(hideLoader());
			const {data} = e;
			dispatch({type: onError, payload: data});
		}
	}
	return next(action);
};
