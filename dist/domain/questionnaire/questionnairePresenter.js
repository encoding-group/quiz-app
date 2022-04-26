"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnairePresenter = void 0;
var QuestionnairePresenter = /** @class */ (function () {
    function QuestionnairePresenter(questionnaire, ui) {
        var _this = this;
        this._questionnaire = questionnaire;
        this._ui = ui;
        this._ui.onStart = function () { return _this.start(); };
        this._ui.onSelectAnswer = function (index) { return _this.selectAnswer(index); };
        this._ui.onConfirmAnswer = function () { return _this.confirmAnswer(); };
        this._ui.onNextQuestion = function () { return _this.nextQuestion(); };
    }
    QuestionnairePresenter.prototype.start = function () {
        var answers = this.currentQuestion.choices.map(function (choice) {
            return {
                state: 'default',
                text: choice.text,
                label: ''
            };
        });
        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.unlockAnswerSelection();
        this._ui.updateScore(this.score);
        this._ui.updateUserAction("pending");
    };
    QuestionnairePresenter.prototype.nextQuestion = function () {
        this._questionnaire.next();
        var answers = this.currentQuestion.choices.map(function (choice) {
            return {
                state: 'default',
                text: choice.text,
                label: ''
            };
        });
        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.unlockAnswerSelection();
        this._ui.updateUserAction("pending");
    };
    QuestionnairePresenter.prototype.selectAnswer = function (answerIndex) {
        this._questionnaire.selectAnswer(answerIndex);
        var answers = this.currentQuestion.choices.map(function (choice, index) {
            return {
                state: answerIndex === index ? 'highlighted' : 'default',
                text: choice.text,
                label: ''
            };
        });
        this._ui.updateAnswers(answers);
        this._ui.updateUserAction("confirm");
    };
    QuestionnairePresenter.prototype.confirmAnswer = function () {
        var _this = this;
        this._questionnaire.confirmAnswer();
        var answers = this.currentQuestion.choices.map(function (choice, index) {
            var currentQuestion = _this._questionnaire.currentQuestion;
            return {
                state: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'correct' : 'incorrect')
                    : 'default',
                text: choice.text,
                label: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'correct' : 'incorrect')
                    : ''
            };
        });
        this._ui.updateAnswers(answers);
        this._ui.lockAnswerSelection();
        this._ui.updateScore(this.score);
        if (this._questionnaire.status === "failed") {
            this._ui.updateUserAction("failed");
            return;
        }
        if (this._questionnaire.status === "success") {
            this._ui.updateUserAction("success");
            return;
        }
        if (this.currentQuestion.answer.isCorrect === "no") {
            this._ui.updateUserAction("wrong_attempt");
            return;
        }
        if (this.currentQuestion.answer.isCorrect === "yes") {
            this._ui.updateUserAction("next");
            return;
        }
    };
    Object.defineProperty(QuestionnairePresenter.prototype, "score", {
        get: function () {
            return this._questionnaire.score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionnairePresenter.prototype, "currentQuestion", {
        get: function () {
            return this._questionnaire.currentQuestion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionnairePresenter.prototype, "currentAnswer", {
        get: function () {
            return this._questionnaire.currentQuestion.answer;
        },
        enumerable: false,
        configurable: true
    });
    return QuestionnairePresenter;
}());
exports.QuestionnairePresenter = QuestionnairePresenter;
