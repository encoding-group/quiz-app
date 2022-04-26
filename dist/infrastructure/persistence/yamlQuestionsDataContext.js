"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YamlQuestionsDataContext = void 0;
var questionsDataContext_1 = require("./questionsDataContext");
var yaml_1 = require("yaml");
var YamlQuestionsDataContext = /** @class */ (function () {
    function YamlQuestionsDataContext(rawContent) {
        this._rawContent = rawContent;
        this._questions = [];
        this.restore();
    }
    YamlQuestionsDataContext.prototype.getQuestions = function () {
        return this._questions;
    };
    YamlQuestionsDataContext.prototype.deleteQuestionById = function (id) {
        var index = this._questions.findIndex(function (question) { return question.id === id; });
        if (index === -1)
            return;
        this._questions.splice(index, 1);
    };
    YamlQuestionsDataContext.prototype.restore = function () {
        this._questions = (0, questionsDataContext_1.convertToQuestionProperties)((0, yaml_1.parse)(this._rawContent));
    };
    return YamlQuestionsDataContext;
}());
exports.YamlQuestionsDataContext = YamlQuestionsDataContext;
