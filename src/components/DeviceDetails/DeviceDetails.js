import React from 'react';

import './DeviceDetails.css';

const deviceDetails = (props) => {

  const deviceId = props.match.params.id;
  console.log('deviceId', deviceId);

  //Instead of passing deviceInfo it through props, is better to do a query in case someone navigates directly to the device page
  // const deviceInfo = props.location.deviceInfo;
  // console.log('deviceInfo', deviceInfo);

  return (
    <div className="device">
      Akis
    </div>
  )
};

export default deviceDetails;