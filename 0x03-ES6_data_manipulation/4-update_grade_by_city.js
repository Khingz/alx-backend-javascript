export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const updatedStudent = { ...student };
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchingGrade) {
      updatedStudent.grade = matchingGrade.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  }).filter((student) => student.location === city);
}
