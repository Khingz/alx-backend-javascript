export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const tempArr = [];
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      const valStr = value.substring(startString.length);
      if (valStr && valStr !== value) {
        tempArr.push(valStr);
      }
    }
  }
  return tempArr.join('-');
}
