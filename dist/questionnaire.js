var Questionnaire = /** @class */ (function () {
    function Questionnaire(logic, questions) {
        this._logic = logic;
        this._questions = questions;
        this._currentQuestionIndex = 0;
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
    Questionnaire.prototype.start = function () {
        var question = this._questions[this._currentQuestionIndex].properties;
    };
    Questionnaire.prototype.selectAnswer = function (answerIndex) {
        this._questions[this._currentQuestionIndex].selectAnswer(answerIndex);
    };
    Questionnaire.prototype.confirmAnswer = function () {
        this._questions[this._currentQuestionIndex].confirmAnswer();
    };
    Questionnaire.prototype.next = function () {
        this._currentQuestionIndex = this._currentQuestionIndex + 1 < this._questions.length
            ? this._currentQuestionIndex + 1
            : this._questions.length - 1;
    };
    return Questionnaire;
}());
export { Questionnaire };
