import React, { Component } from 'react';

import DeviceList from '../../components/DeviceList/DeviceList';
import Sorting from '../../components/Sorting/Sorting';
import Filtering from '../../components/Filtering/Filtering';

import './Shop.css';

class Shop extends Component {
	state = {
		devices: [],
		sortedDevices: [],
		orderDirection: 'nameAsc',
		orderBy: ''
		// selectedDevice: ''
	}

	getDevices() {
		fetch('/phonesData.json')
			.then(response => response.json())
			.then(result => {

				const devices = Object.keys(result).map(item => {
					return result[item];
				})

				this.setState({
					devices,
					sortedDevices: devices
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
					<div>Sorting options:</div>
					<Filtering
						devices={this.state.devices}
						onFilterApply={filteredDevices => this.setState({ sortedDevices: filteredDevices})}
						priceFilter={this.state.price}
						onPriceFilter={price => this.setState({price})}
					/>
					<Sorting
						devices={this.state.devices}
						tempDevices={this.state.sortedDevices}
						// devicesOrder={order => this.setState({ orderDirection: order.orderDirection, })}
						devicesSorting={devicesOrderObj => this.setState({
							sortedDevices: devicesOrderObj.sortedTempDevices,
							orderDirection: devicesOrderObj.orderDirection,
							orderBy: devicesOrderObj.orderBy
						})}
					/>
				</section>
				<section className="devices">
					<DeviceList
						// devices={this.state.devices}
						devices={this.state.sortedDevices}
					// onDeviceSelection={deviceId => this.props.history.push(`/device/${deviceId}`)}
					/>
				</section>
			</div>
		);
	}
}

export default Shop;