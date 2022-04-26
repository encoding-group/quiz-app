"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewBuilder = void 0;
var questionnaire_1 = require("../domain/questionnaire");
var persistence_1 = require("./persistence");
var services_1 = require("./services");
function viewBuilder(rules, props, view) {
    var context = new persistence_1.QuestionPropsDataContext(props);
    var questionsRepository = new persistence_1.QuestionsRepository(context);
    var collection = new services_1.EvenlyDistributedByGroup(questionsRepository);
    var questionnaire = new questionnaire_1.Questionnaire(rules, collection.asArray());
    var presenter = new questionnaire_1.QuestionnairePresenter(questionnaire, view);
    return {
        view: view,
        result: function () { return resultBuilder(questionnaire); }
    };
}
exports.viewBuilder = viewBuilder;
function resultBuilder(questionnaire) {
    return questionnaire.allQuestions
        .filter(function (question) { return question.answer.isCorrect !== "pending"; })
        .map(function (question) { return ({
        text: question.title,
        isCorrect: question.answer.isCorrect === "yes"
    }); });
}
