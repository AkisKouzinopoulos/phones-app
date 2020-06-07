import React from 'react';

import FilterCheckboxes from './FilterCheckboxes/FilterCheckboxes'
import FilterPrice from '../../components/Filtering/FilterPrice/FilterPrice';

const filtering = (props) => {

  const { devices } = props;
  const { onFilterApply } = props;

  let tempDevices = devices;
  let checkboxesArr = [];
  let priceFrom = 0;

  const findSelectedFilters = (obj) => {
    checkboxesArr = obj;
  }

  const findPriceFilter = (value) => {
    priceFrom = value;
  }

  const handleFiltering = () => {
    checkboxesArr.map(item => {
      return (
        tempDevices = tempDevices
          .filter(eachItem => {
            console.log('aa', priceFrom);

            return (
              eachItem['filterfeatures'][item]
              &&
              eachItem['priceFrom'] > priceFrom
            )
          })
      )
    });
    // console.log('temp', tempDevices);
    return tempDevices;
  }

  return (
    <div>
      <FilterCheckboxes
        onFilter={(obj) => findSelectedFilters(obj)}
      />
      <FilterPrice
        onPriceFilter={(value) => findPriceFilter(value)}
      />
      <button
        className="button-filter"
        href="#"
        // getCheckboxes={getCheckboxes}
        onClick={() => onFilterApply(handleFiltering())}
      >
        Filter
      </button>

    </div>
  )
}

export default filtering;