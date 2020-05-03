import { OutputTarget } from "../Summary";

export class ConsoleTarget implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
