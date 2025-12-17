import { Employee } from "../model/Employee";
import { EmployeeReport } from "../interfaces/report/EmployeeReport";

export class EmployeeCsvReport implements EmployeeReport {
  print(employee: Employee): void {
    // CSV report generation
  }
}