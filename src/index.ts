import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleTarget } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

// DataReaderインターフェースを満たすオブジェクト作成
const csvFileReader = new CsvFileReader("original.csv");

// MatchReaderインスタンスを作成し、
// DataReaderインターフェースを満たすオブジェクトを渡す
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
