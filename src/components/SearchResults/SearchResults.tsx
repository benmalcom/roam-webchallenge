import React, { Component, MouseEvent } from 'react';
import './SearchResults.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Loader from '../_App/partials/Loader/Loader';
import Message from '../_App/partials/Message/Message';
import Stop, { StopProps } from './Stop/Stop';
import Header from './Header/Header';
import { getStops } from '../../redux/actions/stop';
import autobind from 'autobind-decorator';
import uuid from 'uuid/v1';

interface ComponentProps {
	stops: StopProps[];
	getStops: Function;
	location: number[];
	pageInfo: object;
	loading: boolean;
	goHome: Function;
}

class SearchResults extends Component<ComponentProps & any, any> {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.getStops(null);
	}

	@autobind
	getNextPage(e: MouseEvent<HTMLButtonElement>) {
		const {pageInfo: {endCursor}} = this.props;
		this.getStops({cursor: {after: endCursor}});
	}

	@autobind
	getRenderedStops(stops: StopProps[]) {
		return stops.map(({id, name, desc, distance}) =>
			<Stop key={uuid()} name={name} desc={desc} distance={distance}/>);
	}

	@autobind
	getStops(cursor: (object | null) = null) {
		const {location, getStops} = this.props;
		if (location) {
			const [long, lat] = location;
			const obj = {lat, long};
			if (cursor) {
				Object.assign(obj, cursor);
			}
			getStops(obj);
		}
	}

	render() {
		const {location, stops, loading, pageInfo} = this.props;
		const {getRenderedStops} = this;
		let tsx: any = null;
		if (!location) {
			tsx = <Message
				message="Sorry we can't get your location information at this time"
				error={true}/>;
		} else if (location && loading) {
			tsx = <Loader/>;
		} else {
				tsx = (stops && stops.length) ? getRenderedStops(stops) :
					<Message message="No result returned for your search" error={true}/>;
		}

		return (<div className="row stops-list">
			<div className="col-12 col-sm-12 col-md-12 mb-3">
				<Header/>
				{ (pageInfo && pageInfo. hasNextPage) && <p className="col-md-12 mt-5">
					<button onClick={this.getNextPage}
						 className="btn btn-sm btn-outline-secondary">Next Page</button>
					</p>}
			</div>
			{tsx}
		</div>);
	}
}

const stateProps = ({
						stopReducer: {stops, pageInfo},
						locationReducer: {location, cursor},
						uiReducer: {loading},
					}) => ({
	stops, location, cursor, loading, pageInfo,
});
const dispatchProps = (dispatch: Dispatch<Function>) => ({
	getStops: (params: object) => dispatch(getStops(params)),
});
export default connect(stateProps, dispatchProps)(SearchResults);
