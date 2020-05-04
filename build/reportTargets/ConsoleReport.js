"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleTarget = /** @class */ (function () {
    function ConsoleTarget() {
    }
    ConsoleTarget.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleTarget;
}());
exports.ConsoleTarget = ConsoleTarget;
