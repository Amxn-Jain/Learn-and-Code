import { Country } from "../model/Country";
import { CountryRepository } from "../interfaces/CountryRepository";
import { CountryNotFoundError } from "../errors/CountryNotFoundError";
import { InvalidCountryCodeError } from "../errors/InvalidCountryCodeError";

export class CountryNeighborService {
  constructor(private readonly repository: CountryRepository) {}

  private getCountryOrThrow(countryCode: string): Country {
    if (!countryCode || !countryCode.trim()) {
      throw new InvalidCountryCodeError();
    }

    const normalizedCode = countryCode.trim().toUpperCase();
    const country = this.repository.findByCode(normalizedCode);

    if (!country) {
      throw new CountryNotFoundError(normalizedCode);
    }

    return country;
  }

  getCountryName(countryCode: string): string {
    return this.getCountryOrThrow(countryCode).name;
  }

  getNeighborCountryNames(countryCode: string): string[] {
    const country = this.getCountryOrThrow(countryCode);

    return country.neighbors.map((neighborCode) => {
      const neighbor = this.repository.findByCode(neighborCode);
      return neighbor ? neighbor.name : `Unknown (${neighborCode})`;
    });
  }
}