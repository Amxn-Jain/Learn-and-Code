export class Employee {
  constructor(
    private id: number,
    private name: string,
    private department: string,
    private working: boolean
  ) {}

  isWorking(): boolean {
    return this.working;
  }
}