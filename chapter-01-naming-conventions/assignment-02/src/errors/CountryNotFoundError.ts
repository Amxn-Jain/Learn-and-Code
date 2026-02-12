import { AppError } from "./AppError";

export class CountryNotFoundError extends AppError {
  constructor(code: string) {
    super(`Country with code '${code}' not found`);
  }
}