import React from 'react';

import './Device.css';

import { Link } from 'react-router-dom';


const device = (props) => {
	const { deviceInfo } = props;
	// const { onDeviceSelection } = props;

	// <p>{this.props.match.params.id}</p>

	return (
		<Link
			to={{
				pathname: `/device/${deviceInfo.productid}`,
				deviceInfo: { deviceInfo }
			}}> {/* //Use the Link instead of pushing in history for navigating to the DeviceDetails component so we can pass the props deviceInfo and avoid quering again */}
			<div className="device"
			// onClick={() => onDeviceSelection(deviceInfo.productid)} //Instead of using this.props.history.push
			>
				<div className='device-img'>
					<img src={deviceInfo.imageFront} alt={deviceInfo.extraDescription} />
				</div>
				<div className="device-info">
					<h4>
						{deviceInfo.description}
					</h4>
					<p className="device-price">Free or {deviceInfo.priceFrom} one-off cost</p>
					<p className="device-rating"></p>
					<p className="device-logo">{deviceInfo.manufacturer}</p>
				</div>
			</div>
		</Link>
	)
};

export default device;