export default function getListStudentIds(arr) {
  const idArr = [];
  if (!Array.isArray(arr)) {
    return idArr;
  }
  arr.map((arrItem) => idArr.push(arrItem.id));

  return idArr;
}
