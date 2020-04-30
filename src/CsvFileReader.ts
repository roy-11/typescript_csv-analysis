import fs from "fs";
import { MatchResult } from "./MatchResult";

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
  data: MatchData[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): MatchData;

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((rows) => {
        return rows.split(",");
      })
      .map(this.mapRow);
  }
}
