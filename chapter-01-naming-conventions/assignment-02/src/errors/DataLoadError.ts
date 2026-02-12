import { AppError } from "./AppError";

export class DataLoadError extends AppError {
  constructor() {
    super("Failed to load country data");
  }
}