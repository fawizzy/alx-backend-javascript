export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const resultByCity = getListStudents.filter((x) => x.location === city);
  const updatedList = resultByCity.map((x) => ({
    ...x, grade: newGrades.filter((g) => g.studentId === x.id).map((g) => g.grade)[0] || 'N/A',
  }));
  return updatedList;
}
