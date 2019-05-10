import React, { Component } from 'react';
import Home from '../components/Home';

export default class Doctor extends Component {
	render() {
		return (
			<Home history={this.props.history}>
				<div>Home Doctor</div>
			</Home>
		);
	}
}
