export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const idx in array) {
    newArr.push(appendString + idx);
  }

  return newArr;
}
