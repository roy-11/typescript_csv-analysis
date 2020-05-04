"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
// import { ConsoleTarget } from "./reportTargets/ConsoleReport";
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// DataReaderインターフェースを満たすオブジェクト作成
var csvFileReader = new CsvFileReader_1.CsvFileReader("original.csv");
// MatchReaderインスタンスを作成し、
// DataReaderインターフェースを満たすオブジェクトを渡す
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
