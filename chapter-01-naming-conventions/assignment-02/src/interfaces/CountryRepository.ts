import { Country } from "../model/Country";

export interface CountryRepository {
  findByCode(countryCode: string): Country | null;
}