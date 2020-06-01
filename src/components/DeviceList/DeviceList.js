import React from 'react';
import Device from '../../components/Device/Device';

const deviceList = (props) => {
  const { devices } = props;
  // const { onDeviceSelection } = props;

  const devicesList = devices.map(item => {
    return <Device
      key={item.productid}
      deviceInfo={item}
      // onDeviceSelection={onDeviceSelection}
    />
  })

  return (
    <div>
      {devicesList}
    </div>
  )
}

export default deviceList;