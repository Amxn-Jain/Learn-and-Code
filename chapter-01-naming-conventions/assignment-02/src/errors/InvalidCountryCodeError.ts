import { AppError } from "./AppError";

export class InvalidCountryCodeError extends AppError {
  constructor() {
    super("Country code cannot be empty");
  }
}