import reducer from '../../redux/reducers/ui';
import * as actions from '../../redux/actions/ui';

describe('ui reducer', () => {
	it('should return the initial state', () => {
		expect(reducer({loading: false}, {type: undefined})).toEqual(
			{
				loading: false,
			});
	});

	it('should handle SHOW_LOADER', () => {
		expect(reducer({loading: false}, {type: actions.SHOW_LOADER})).toEqual(
			{
				loading: true,
			});
	});

	it('should handle HIDE_LOADER', () => {
		expect(reducer({loading: false}, {type: actions.HIDE_LOADER})).toEqual(
			{
				loading: false,
			});
	});
});
