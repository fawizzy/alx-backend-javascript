export default function createReportObject(employeesList) {
    return {
        allEmployees : employeesList,
        getNumberOfDepartments(Employees){
            return Object.keys(employeesList).length;
        }
    }
}