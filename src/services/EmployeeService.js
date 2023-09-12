
export default class EmployeeService {

    constructor() {
        this.baseUrl = "http://localhost:8000/api";
    }

    async getAllEmployees() {
        const response = await fetch(`${this.baseUrl}/empleados`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data;
    }

    async findByEmail(email) {
        const response = await fetch(`${this.baseUrl}/empleados/find-email/${email}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data;
    }

    async getEmployeebyId(id) {
        const response = await fetch(`${this.baseUrl}/empleados/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        return data;
    }

    async findBySalary(min, max) {
        const response = await fetch(`${this.baseUrl}/empleados/find-salary`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"min_salary":min,"max_salary":max}),
            method: "POST",
        });
        const data = await response.json();
        return data;
    }

}