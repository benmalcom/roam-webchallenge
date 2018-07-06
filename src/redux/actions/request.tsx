import { Action } from 'redux';
export const GET = 'get';
export const POST = 'post';

export const REQUEST = '[app] REQUEST';

export interface RequestAction extends Action {
	payload?: object;
	params?: object;
	meta: {
		method: string,
		url: string,
		onSuccess: string,
		onError: string,
		params?: object,
		nextUrl?: string,
	};
}

export const sendRequest = (method: string, url: string,
						   payload: any, params: any,
						   onSuccess: string, onError: string,
						   nextUrl: (string | null)) => (
	{
		type: REQUEST,
		payload,
		params,
		meta: {method, url, onSuccess, onError, nextUrl},
	});
