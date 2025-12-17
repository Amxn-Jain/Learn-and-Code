import * as readline from "readline";

export class ConsoleInputReader {
  static readInput(prompt: string): Promise<string> {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      reader.question(prompt, (answer) => {
        reader.close();
        resolve(answer);
      });
    });
  }
}