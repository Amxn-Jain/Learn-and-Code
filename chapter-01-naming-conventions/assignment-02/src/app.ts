import { AppError } from "./errors/AppError";
import { ConsoleInputReader } from "./utils/ConsoleInputReader";
import { CountryNeighborService } from "./services/CountryNeighborService";
import { JsonCountryRepository } from "./repositories/JsonCountryRepository";

async function main() {
  try {
    const repository = new JsonCountryRepository();
    const service = new CountryNeighborService(repository);

    const input = process.argv[2] || (await ConsoleInputReader.readInput("Enter Country Code: "));
    const neighbors = service.getNeighborCountryNames(input);

    console.log(`\nAdjacent countries of ${input.toUpperCase()} (${service.getCountryName(input)}):`);
    neighbors.forEach((name, index) => {
      console.log(`${index + 1}. ${name}`);
    });
  } catch (error) {
    if (error instanceof AppError) {
      console.error(`${error.message}`);
    } else {
      console.error("Unexpected error occurred");
    }
  }
}

main();