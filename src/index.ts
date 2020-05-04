import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("original.csv");
matchReader.load();

Summary.winsAnalysisWithHtmlReport("Man United").buildAndPrintReport(matchReader.matches);
Summary.winsAnalysisWithConsoleReport("Man United").buildAndPrintReport(matchReader.matches);
