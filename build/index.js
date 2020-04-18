"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
// CSVファイルのパース
var reader = new CsvFileReader_1.CsvFileReader("original.csv");
reader.read();
// Enum 勝敗/引き分け
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
// manUnitedの勝ち数カウント
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
        manUnitedWins++;
    if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
        manUnitedWins++;
}
console.log(manUnitedWins);
