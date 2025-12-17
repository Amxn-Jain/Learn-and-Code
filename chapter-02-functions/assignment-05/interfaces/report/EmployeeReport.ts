import { Employee } from "../../model/Employee";

export interface EmployeeReport {
  print(employee: Employee): void;
}