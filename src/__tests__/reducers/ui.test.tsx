import reducer from '../../redux/reducers/ui';
import * as actions from '../../redux/actions/ui';
import { loading, notLoading, undefinedAction } from '../seed/utils';

describe('ui reducer', () => {

	it('should return the initial state', () => {
		expect(reducer(notLoading, undefinedAction)).toEqual(notLoading);
	});

	it('should handle SHOW_LOADER', () => {
		expect(reducer(loading, {type: actions.SHOW_LOADER})).toEqual(loading);
	});

	it('should handle HIDE_LOADER', () => {
		expect(reducer(notLoading, {type: actions.HIDE_LOADER})).toEqual(notLoading);
	});
});
