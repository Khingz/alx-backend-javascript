export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const tempArr = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      tempArr.push(value.replace(startString, ''));
    }
  }
  return tempArr.join('-');
}
