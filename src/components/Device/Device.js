import React from 'react';

import './Device.css';

const device = (props) => {
	const { deviceInfo } = props;
	const { onDeviceSelection } = props;

	// <p>{this.props.match.params.id}</p>

	return (
		<div className="device"
			onClick={() => onDeviceSelection(deviceInfo.productid)}
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
	)
};

export default device;