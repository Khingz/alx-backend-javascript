export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for code
  set code(value) {
    this._code = value;
  }

  // Setter for name
  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
