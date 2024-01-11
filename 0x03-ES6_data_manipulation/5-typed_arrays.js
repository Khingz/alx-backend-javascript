export default function createInt8TypedArray(length, position, value) {
  const unint8Arr = new Int8Array(length);
  for (let i = 0; i < length; i++) {
    unint8Arr[i] = null;
  }
  if (position < length) {
    unint8Arr[position] = value;
  }
  return unint8Arr;
}
