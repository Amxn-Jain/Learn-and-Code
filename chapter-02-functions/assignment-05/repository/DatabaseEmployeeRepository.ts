import { Employee } from "../model/Employee";
import { EmployeeRepository } from "../interfaces/repository/EmployeeRepository";

export class DatabaseEmployeeRepository implements EmployeeRepository {
  save(employee: Employee): void {
    // database persistence
  }
}