export default function getListStudentIds(list) {
  if (Array.isArray(list) === false) {
    return [];
  }

  return list.map((x) => x.id);
}
