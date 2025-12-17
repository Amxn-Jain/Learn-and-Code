import { Employee } from "../model/Employee";
import { EmployeeReport } from "../interfaces/report/EmployeeReport";

export class EmployeeXmlReport implements EmployeeReport {
  print(employee: Employee): void {
    // XML report generation
  }
}