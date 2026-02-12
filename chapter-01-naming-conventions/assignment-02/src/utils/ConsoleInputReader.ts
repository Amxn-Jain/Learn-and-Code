import * as readline from "readline";

export class ConsoleInputReader {
  static readInput(prompt: string): Promise<string> {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      readlineInterface.question(prompt, (answer) => {
        readlineInterface.close();
        resolve(answer);
      });
    });
  }
}