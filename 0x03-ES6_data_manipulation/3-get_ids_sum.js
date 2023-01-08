import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(getListStudents) {
  const getListStudent = getListStudentIds(getListStudents);
  const sum = getListStudent.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return sum;
}
