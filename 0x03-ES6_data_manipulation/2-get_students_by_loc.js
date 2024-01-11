export default function getStudentsByLocation(arr, searchStr) {
  return arr.filter((item) => item.location === searchStr);
}
