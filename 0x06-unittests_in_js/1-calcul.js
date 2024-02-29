function calculateNumber(type, a, b) {
  if (type === "SUM") {
      return Math.round(a) + Math.round(b);
  }
  if (type === "SUBTRACT") {
    return Math.round(a) - Math.round(b);
  }
  if (type ===  "DIVIDE") {
    int1 = Math.round(a);
    int2 = Math.round(b);
    if (int2 === 0) {
        return "Error";
    }
    return int1 / int2;
  }
}
  
  module.exports = calculateNumber;