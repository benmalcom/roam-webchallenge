import * as actions from '../../redux/actions/location';

describe('Location actions', () => {
	it('should create a getLocation action', () => {
		const params = {text: 'kamppi', size: 1};
		const expectedAction = {
			type: actions.GET_LOCATION,
			params,
		};
		expect(actions.getLocation(params.text)).toEqual(expectedAction);
	});
});
