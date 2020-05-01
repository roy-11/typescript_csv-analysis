"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
// DataReaderインターフェースを満たすオブジェクト作成
var csvFileReader = new CsvFileReader_1.CsvFileReader("original.csv");
// MatchReaderインスタンスを作成し、
// DataReaderインターフェースを満たすオブジェクトを渡す
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// manUnitedの勝ち数カウント
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin)
        manUnitedWins++;
    if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)
        manUnitedWins++;
}
console.log(manUnitedWins);
