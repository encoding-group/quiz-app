"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questionnaire = void 0;
var Questionnaire = /** @class */ (function () {
    function Questionnaire(logic, questions) {
        this._score = 0;
        this._attempts = 0;
        this._logic = logic;
        this._questions = questions;
        this._currentQuestionIndex = 0;
        this._attempts = logic.incorrectAnswersMaximum;
    }
    Object.defineProperty(Questionnaire.prototype, "currentQuestion", {
        get: function () {
            return this._questions[this._currentQuestionIndex];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "allQuestions", {
        get: function () {
            return this._questions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "attempts", {
        get: function () {
            return this._attempts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "correctAnswersCount", {
        get: function () {
            return this.allQuestions.filter(function (question) { return question.answer.isCorrect === "yes"; }).length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "incorrectAnswersCount", {
        get: function () {
            return this.allQuestions.filter(function (question) { return question.answer.isCorrect === "no"; }).length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Questionnaire.prototype, "status", {
        get: function () {
            if (this.attempts <= 0)
                return "failed";
            if (this.score >= this._logic.correctAnswersMinimum)
                return "success";
            return "pending";
        },
        enumerable: false,
        configurable: true
    });
    Questionnaire.prototype.selectAnswer = function (answerIndex) {
        this.currentQuestion.selectAnswer(answerIndex);
    };
    Questionnaire.prototype.confirmAnswer = function () {
        this.currentQuestion.confirmAnswer();
        if (this.currentQuestion.answer.isCorrect === "yes") {
            this._score++;
            return;
        }
        if (this.currentQuestion.answer.isCorrect === "no") {
            this._score = 0;
            this._attempts--;
        }
    };
    Questionnaire.prototype.next = function () {
        this._currentQuestionIndex = this._currentQuestionIndex + 1 < this._questions.length
            ? this._currentQuestionIndex + 1
            : this._questions.length - 1;
    };
    return Questionnaire;
}());
exports.Questionnaire = Questionnaire;
