"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var answer_1 = require("./answer");
var Question = /** @class */ (function () {
    function Question(questionProps) {
        this._id = questionProps.id;
        this._title = questionProps.title;
        this._correctAnswerIndex = questionProps.correctAnswerIndex;
        this._choices = questionProps.answers;
        this._selectedAnswerIndex = -1;
        this._answer = new answer_1.Answer(this._selectedAnswerIndex, this._correctAnswerIndex);
    }
    Object.defineProperty(Question.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "choices", {
        get: function () {
            var _this = this;
            return this._choices.map(function (choice, index) {
                return {
                    isCorrect: index === _this._correctAnswerIndex,
                    text: choice
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    Question.prototype.selectAnswer = function (answerIndex) {
        this._selectedAnswerIndex = answerIndex;
    };
    Question.prototype.confirmAnswer = function () {
        this._answer = new answer_1.Answer(this._selectedAnswerIndex, this._correctAnswerIndex);
    };
    return Question;
}());
exports.Question = Question;
