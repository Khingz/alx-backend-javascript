export default function createIteratorObject(report) {
  const newArr = [];
  for (const val of Object.values(report.allEmployees)) {
    newArr.push(...val);
  }
  return newArr;
}
