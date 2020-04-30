import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// CSVファイルのパース
const reader = new MatchReader("original.csv");
reader.read();

// manUnitedの勝ち数カウント
let manUnitedWins = 0;
for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) manUnitedWins++;
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(manUnitedWins);
