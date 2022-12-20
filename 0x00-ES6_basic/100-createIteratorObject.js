export default function createIteratorObject(report) {
  const employeeList = report.allEmployees;
  let arr = [];
  for (const employee of Object.values(employeeList)) {
    arr = [...arr, ...employee];
  }
  return arr;
}
