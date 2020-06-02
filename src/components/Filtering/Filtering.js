import React from 'react';

import FilterCheckboxes from './FilterCheckboxes/FilterCheckboxes'

const filtering = (props) => {

  const { devices } = props;
  const { onFilterApply } = props;

  let tempDevices = devices;
  let checkboxesArr = [];

  const findSelectedFilters = (obj) => {
    checkboxesArr = obj;
  }

  const handleFiltering = () => {
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
    // console.log('temp', tempDevices);
    return tempDevices;
  }

  return (
    <div>
      <FilterCheckboxes
        onFilter={(obj) => findSelectedFilters(obj)}
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