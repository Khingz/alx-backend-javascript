export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, val) => acc + val.id, 0);
}
