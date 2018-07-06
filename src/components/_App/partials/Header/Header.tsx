import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
export default () => (
	<nav className="navbar navbar-expand-lg bg-white fixed-top guest-navbar">
		<NavLink to="/" className="navbar-brand text-info text-muted">
			<i className="fa fa-map-marker text-danger"/> Spot Finder</NavLink>
		<button
			className="navbar-toggler"
			type="button" data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="fa fa-bars text-white" />
		</button>

		<div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent"/>
	</nav>
);
