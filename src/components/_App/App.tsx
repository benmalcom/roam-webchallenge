import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import general css dependencies
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './App.scss';

import Aux from './partials/Aux';
import Header from './partials/Header/Header';
import Home from '../Home/Home';
import SearchResults from '../SearchResults/SearchResults';

const App = () => (
	<Aux>
		<Header/>
		<div className="container">
				<Switch>
					<Route exact={true} path={'/'} component={Home}/>
					<Route path={'/search-results'} component={SearchResults}/>
				</Switch>
		</div>
	</Aux>
);

export default App;
