"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionPropsDataContext = void 0;
var QuestionPropsDataContext = /** @class */ (function () {
    function QuestionPropsDataContext(questionsProps) {
        this._propsRaw = questionsProps;
        this._questions = [];
        this.restore();
    }
    QuestionPropsDataContext.prototype.getQuestions = function () {
        return this._questions;
    };
    QuestionPropsDataContext.prototype.deleteQuestionById = function (id) {
        var index = this._questions.findIndex(function (question) { return question.id === id; });
        if (index === -1)
            return;
        this._questions.splice(index, 1);
    };
    QuestionPropsDataContext.prototype.restore = function () {
        this._questions = this._propsRaw.map(function (props) { return props; });
    };
    return QuestionPropsDataContext;
}());
exports.QuestionPropsDataContext = QuestionPropsDataContext;
