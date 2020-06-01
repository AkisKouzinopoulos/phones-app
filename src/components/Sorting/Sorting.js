import React from 'react';

import handleOrderSort from './handleOrderSort';

const sorting = (props) => {

  const { devices } = props;
  const { orderDirection } = props;
  const { devicesSorting } = props;

  // console.log('d', devices);


  return (
    <div>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'default' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ devices, orderBy: 'description', orderDirection: 'default' }))}
      >
        Default
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'asc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ devices, orderBy: 'description', orderDirection: 'nameAsc' }))}
      >
        Name (Asc)
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'desc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ devices, orderBy: 'description', orderDirection: 'nameDesc' }))}
      >
        Name (Desc)
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'asc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ devices, orderBy: 'priceFrom', orderDirection: 'priceAsc' }))}
      >
        Price (Asc)
      </button>
      <button
        className={`sort-by dropdown-item ${orderDirection === 'desc' ? 'active' : ''} `}
        href="#"
        onClick={() => devicesSorting(handleOrderSort({ devices, orderBy: 'priceFrom', orderDirection: 'priceDesc' }))}
      >
        Price (Desc)
      </button>
    </div>
  )
}

export default sorting;