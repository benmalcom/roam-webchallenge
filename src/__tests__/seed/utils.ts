export const error = new Error('error');
export const undefinedAction = {type: undefined, payload: {}};
export const notLoading = { loading: false};
export const loading = { loading: true};
export const getErrorPayload = (actionType: string) => ({ type: actionType, payload: error});
