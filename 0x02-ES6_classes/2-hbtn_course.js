export default class HolbertonCourse {
  constructor(name, length, students) {
    this.length = length;
    this.name = name;
    this.students = students;
  }

  // Getter method for name
  get name() {
    return this._name;
  }

  // Getter method for length
  get length() {
    return this._length;
  }

  // Getter method for students
  get students() {
    return this._students;
  }

  // Setter method for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Setter method for length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Setter method for students
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
