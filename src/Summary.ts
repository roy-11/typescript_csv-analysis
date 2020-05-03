import { MatchData } from "./matchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  pring(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
