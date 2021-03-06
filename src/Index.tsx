import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, {history} from './redux/store';
import App from './components/_App/App';
import './Index.css';

ReactDOM.render(<Provider store={store}>
		<ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'));
