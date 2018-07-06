import React from 'react';
const locationMarker = require('./marker.jpg');
import './Stop.scss';

export interface StopProps {
	id?: string;
	name: string;
	desc: string;
	distance: number;
}

export default ({name, desc, distance}: StopProps) => {
	return (<div className="col-lg-4 col-md-4 col-sm-6 col-12">
		<div className="row stop-item shadow">
			<div className="col-md-4 col-4 full-height full-width p-0">
				<img src={locationMarker} className="marker-image"/>
			</div>
			<div className="col-md-8 col-8 pt-30 stop-item-details">
				<div className="mr-auto text-left">
					<h6 className="mb-1 mt-1">
						<strong className="name">{name}</strong>
					</h6>
					<h6 className="text-sm text-muted">{desc}</h6>
					<label className="badge badge-info text-xs">
						<i className="fa fa-car"/> {distance} meters away
					</label>

				</div>
			</div>
		</div>
	</div>);
};
