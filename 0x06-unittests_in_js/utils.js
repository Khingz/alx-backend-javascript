const Utils = {
  calculateNumber(type, a, b) {
    const int1 = Math.round(a);
    const int2 = Math.round(b);

    if (type === 'SUBTRACT') {
        return int1 - int2;
    }

    if (type === 'DIVIDE') {
        if (int2 === 0) {
        return 'Error';
        }
        return int1 / int2;
    }

    return int1 + int2;
  }
};

module.exports = Utils;