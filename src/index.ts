import { CsvFileReader } from "./CsvFileReader";

// CSVファイルのパース
const reader = new CsvFileReader("original.csv");
reader.read();

// Enum 勝敗/引き分け
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

// manUnitedの勝ち数カウント
let manUnitedWins = 0;
for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) manUnitedWins++;
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(manUnitedWins);
