const sortObjBy = (valueToShort, reverse, primer) => {
  const key = primer ?
    function (x) {
      return primer(x[valueToShort])
    } :
    function (x) {
      return x[valueToShort]
    };

  reverse = !reverse ? 1 : -1;

  return function (a, b) {
    return (a = key(a), b = key(b), reverse * ((a > b) - (b > a)));
  }
}

const handleOrderSort = ({ tempDevices, orderBy, orderDirection }) => {
  let sortedObj = {};
  let sortedTempDevices = Array.from(tempDevices);

  switch (orderDirection) {
    case 'nameAsc':
      sortedTempDevices.sort(sortObjBy(orderBy, false, (a) => a.toUpperCase()));
      break;
    case 'nameDesc':
      sortedTempDevices.sort(sortObjBy(orderBy, true, (a) => a.toUpperCase()));
      break;
    case 'priceAsc':
      sortedTempDevices.sort(sortObjBy(orderBy, false, parseInt));
      break;
    case 'priceDesc':
      sortedTempDevices.sort(sortObjBy(orderBy, true, parseInt));
      break;
    default: // is better to use switc default instead of "case 'default' " to be as a fallback
      sortedTempDevices = tempDevices;
  }

  sortedObj = {
    sortedTempDevices,
    orderDirection,
    orderBy
  }

  return sortedObj;

}

export default handleOrderSort;