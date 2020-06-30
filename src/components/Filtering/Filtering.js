import React from 'react';

import FilterCheckboxes from './FilterCheckboxes/FilterCheckboxes'
import FilterPrice from '../../components/Filtering/FilterPrice/FilterPrice';

const filtering = (props) => {

  const { devices } = props;
  const { onFilterApply } = props;
  const { priceFilter } = props;
  const { onPriceFilter } = props;

  let tempDevices = devices;
  let checkboxesArr = [];

  const findSelectedFilters = (obj) => {
    checkboxesArr = obj;
  }

  const findPriceFilter = (value) => {
    onPriceFilter(value);
  }

  const handleFiltering = () => {

        tempDevices = tempDevices
          .filter(eachItem => {
            return (
              eachItem['priceFrom'] > priceFilter
            )
          })

        checkboxesArr.map(item => {
          return (
            tempDevices = tempDevices
              .filter(eachItem => {
                return (
                  eachItem['filterfeatures'][item]
                )
              })
          )
        });

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