export default function createReportObject(employeesList) {
	return {
		allEmployees:{
			...employeesList
		},
		getsNumberofDepartments() {
			return Object.keys(employeesList).length;
		}
	};
	

}
