import React, { Component } from 'react';

import './DeviceDetails.css';

// const deviceDetails = (props) => {
class DeviceDetails extends Component {

  state = {
    deviceInfo: {},
    deviceId: this.props.match.params.id
  }

  getDeviceInfo() {
    fetch('/phonesData.json')
      .then(response => response.json())
      .then(result => {

        const devices = Object.keys(result).map(item => {
          return result[item];
        });
        const deviceInfo = devices.find(({ productid }) => productid === this.state.deviceId);

        this.setState({
          deviceInfo
        });

      });
  }

  componentDidMount() {
    this.getDeviceInfo();
  }
  //Instead of passing deviceInfo it through props, is better to do a query in case someone navigates directly to the device page
  // const deviceInfo = props.location.deviceInfo;
  // console.log('deviceInfo', deviceInfo);

  render() {
    const device = this.state.deviceInfo;
    return (
      <div className="device"
      >
        <h4>
          {device.description}
        </h4>
        <div className='device-img'>
          <img src={device.imageFront} alt={device.extraDescription} />
        </div>
        <div className="device-info">
          <p className="device-price">Free or {device.priceFrom} one-off cost</p>
          <p className="device-rating"></p>
          <p className="device-logo">{device.manufacturer}</p>
        </div>
      </div>
    )
  }
};

export default DeviceDetails;