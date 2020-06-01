import React, { Component } from 'react';

import DeviceList from '../../components/DeviceList/DeviceList';

import './Shop.css';

class Shop extends Component {
	// state = {
	// 	devices : [],
	// 	selectedDevice: ''
	// }

	constructor() {
		super();
		this.state = {
			devices: [],
			selectedDevice: ''
		};

		// this.deleteAppointment = this.deleteAppointment.bind(this);
		// this.testMe = this.testMe.bind(this);

	}

	// this.getDevices = this.getDevices.bind(this);

	getDevices() {
		fetch('./phonesData.json')
			.then(response => response.json())
			.then(result => {

				const devices = Object.keys(result).map(item => {
					return result[item];
				})

				this.setState({
					devices
				});

			});
	}

	componentDidMount() {
		this.getDevices();
	}

	render() {
		return (
			<div className="shop">
				<section className="devices">
					<DeviceList
						devices={this.state.devices}
						// onDeviceSelection={deviceId => this.props.history.push(`/device/${deviceId}`)}
					/>
				</section>
				{/* <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section> */}
			</div>
		);
	}
}

export default Shop;