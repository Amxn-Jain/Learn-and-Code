import * as fs from "fs";

import { Country } from "../model/Country";
import { DataLoadError } from "../errors/DataLoadError";
import { COUNTRIES_FILE_PATH } from "../constants/filePaths";
import { CountryRepository } from "../interfaces/CountryRepository";

export class JsonCountryRepository implements CountryRepository {
  private readonly countries: Record<string, Country>;

  constructor() {
    try {
      this.countries = JSON.parse(fs.readFileSync(COUNTRIES_FILE_PATH, "utf-8"));
    } catch {
      throw new DataLoadError();
    }
  }

  findByCode(countryCode: string): Country | null {
    return this.countries[countryCode] || null;
  }
}