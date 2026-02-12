import { Employee } from "../../model/Employee";

export interface EmployeeRepository {
  save(employee: Employee): void;
}