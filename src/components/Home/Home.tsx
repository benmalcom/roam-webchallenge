import React, { Component, FormEvent } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { getLocation } from '../../redux/actions/location';

interface ComponentProps {
	getLocation: Function;
	loading: boolean;
	location: object;
}

class Home extends Component<ComponentProps, any> {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
	}

	@autobind
	getLocationDetails(e: FormEvent<HTMLButtonElement>) {
		const {inputValue} = this.state;
		const {getLocation} = this.props;
		if (inputValue) {
			getLocation(inputValue);
		}
	}

	@autobind
	onSearchChange({currentTarget: {name, value}}: FormEvent<HTMLInputElement>) {
		this.setState((state) => ({[name]: value}));
	}

	render() {
		const {loading} = this.props;
		const {inputValue} = this.state;
		return (<div className="container-fluid top">
			<div className="row col-12 col-sm-8 col-md-7 col-lg-7 mx-auto">
				<div className="text-center">
					<h4><strong>Find favourite spots in Helsinki</strong></h4>
					<p className="text-muted">Enter a location in Helsinki and it should show you the nearest
						amenities (stops, bike rentals, bike parking, and car parking)</p>
					<div className="input-group">
						<input className="form-control border-secondary py-2" name="inputValue"
							   onChange={this.onSearchChange} value={inputValue}
							   type="search" placeholder="Search a location..."/>
						<div className="input-group-append">
							<button className="btn btn-outline-info" disabled={loading}
									type="button" onClick={this.getLocationDetails}>
								<i className={loading ? 'fa fa-spinner fa-spin' : 'fa fa-search'}/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>);
	}
}

const stateProps = ({uiReducer: {loading}}) => ({loading});
const dispatchProps = (dispatch) => ({
	getLocation: (name: string) => dispatch(getLocation(name)),
});
export default connect(stateProps, dispatchProps)(Home);
