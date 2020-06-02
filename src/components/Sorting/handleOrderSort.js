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

const handleOrderSort = ({ devices, orderBy, orderDirection }) => {

  let sortedObj = {};

  let tempDevices = Array.from(devices);

  switch (orderDirection) {
    case 'nameAsc':
      tempDevices.sort(sortObjBy(orderBy, false, (a) => a.toUpperCase()));
      break;
    case 'nameDesc':
      tempDevices.sort(sortObjBy(orderBy, true, (a) => a.toUpperCase()));
      break;
    case 'priceAsc':
      tempDevices.sort(sortObjBy(orderBy, false, parseInt));
      break;
    case 'priceDesc':
      tempDevices.sort(sortObjBy(orderBy, true, parseInt));
      break;
    default: // is better to use switc default instead of "case 'default' " to be as a fallback
      tempDevices = devices;
  }

  sortedObj = {
    tempDevices,
    orderDirection,
    orderBy
  }

  return sortedObj;

}

export default handleOrderSort;