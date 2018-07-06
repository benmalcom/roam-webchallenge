
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import middlewares from './middlewares';

// Create history object
export const history = createHistory();

const isProd = process.env.NODE_ENV === 'production';
// Middlewares
const getMiddlewares = () => {
	const appMiddlewares: any[] = [
		routerMiddleware(history),
		...middlewares,
		// ...appMiddlewares
	];
	if (isProd) {
		return applyMiddleware(...appMiddlewares);
	} else {
		// Enable additional logging in non-production environments.
		middlewares.push(createLogger());
		return applyMiddleware(...appMiddlewares);
	}
};
// Create store
const store = createStore(rootReducer, composeWithDevTools(getMiddlewares()));

// Export store
export default store;
