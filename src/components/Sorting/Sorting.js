import React from 'react';

import handleOrderSort from './handleOrderSort';

const sorting = (props) => {

  const { devices } = props;
  const { tempDevices } = props;
  const { orderDirection } = props;
  const { devicesSorting } = props;

  // console.log('devices', devices);
  // console.log('tempDevices', tempDevices);

  return (
    <div>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'default' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ tempDevices, orderBy: 'description', orderDirection: 'default' }))}
      >
        Default
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'asc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ tempDevices, orderBy: 'description', orderDirection: 'nameAsc' }))}
      >
        Name (Asc)
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'desc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ tempDevices, orderBy: 'description', orderDirection: 'nameDesc' }))}
      >
        Name (Desc)
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'asc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ tempDevices, orderBy: 'priceFrom', orderDirection: 'priceAsc' }))}
      >
        Price (Asc)
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'desc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ tempDevices, orderBy: 'priceFrom', orderDirection: 'priceDesc' }))}
      >
        Price (Desc)
      </button>
    </div>
  )
}

export default sorting;