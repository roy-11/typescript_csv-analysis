import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

// DataReaderインターフェースを満たすオブジェクト作成
const csvFileReader = new CsvFileReader("original.csv");

// MatchReaderインスタンスを作成し、
// DataReaderインターフェースを満たすオブジェクトを渡す
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// manUnitedの勝ち数カウント
let manUnitedWins = 0;
for (const match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) manUnitedWins++;
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(manUnitedWins);
