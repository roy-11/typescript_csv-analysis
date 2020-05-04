"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
// DataReaderインターフェースを満たすオブジェクト作成
var csvFileReader = new CsvFileReader_1.CsvFileReader("original.csv");
// MatchReaderインスタンスを作成し、
// DataReaderインターフェースを満たすオブジェクトを渡す
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleTarget());
summary.buildAndPrintReport(matchReader.matches);
