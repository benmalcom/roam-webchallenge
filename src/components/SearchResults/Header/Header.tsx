import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
export default () => (
	<h4 className="text-muted">
		Search results &nbsp; &nbsp;
		<Link to="/" className="btn btn-sm btn-outline-info text-sm text-right">
			<i className="fa fa-arrow-left"/> Back to search</Link>
	</h4>);
