"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
var Answer = /** @class */ (function () {
    function Answer(givenAnswerIndex, correctAnswerIndex) {
        this._givenAnswerIndex = givenAnswerIndex;
        this._correctAnswerIndex = correctAnswerIndex;
    }
    Object.defineProperty(Answer.prototype, "isCorrect", {
        get: function () {
            if (this._correctAnswerIndex < 0 || this._givenAnswerIndex < 0)
                return "pending";
            return this._correctAnswerIndex === this._givenAnswerIndex ? "yes" : "no";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "given", {
        get: function () {
            return this._givenAnswerIndex;
        },
        enumerable: false,
        configurable: true
    });
    return Answer;
}());
exports.Answer = Answer;
