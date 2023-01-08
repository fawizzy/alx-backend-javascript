export default function getStudentsByLocation(list, string) {
  const result = list.filter((location) => location.location === string);
  return result;
}
