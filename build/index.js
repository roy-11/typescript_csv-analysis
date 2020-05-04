"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv("original.csv");
matchReader.load();
Summary_1.Summary.winsAnalysisWithHtmlReport("Man United").buildAndPrintReport(matchReader.matches);
Summary_1.Summary.winsAnalysisWithConsoleReport("Man United").buildAndPrintReport(matchReader.matches);
