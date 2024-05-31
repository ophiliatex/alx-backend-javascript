export default function createIteratorObject(report) {
  const employeeIterator = function* (employees) {
    for (const department of Object.values(employees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  };

  return employeeIterator(report.allEmployees);
}
