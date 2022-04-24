import { Questionnaire, QuestionnairePresenter } from "../domain/questionnaire";
import { QuestionPropsDataContext, QuestionsRepository } from "./persistence";
import { EvenlyDistributedByGroup } from "./services";
export function viewBuilder(rules, props, view) {
    var context = new QuestionPropsDataContext(props);
    var questionsRepository = new QuestionsRepository(context);
    var collection = new EvenlyDistributedByGroup(questionsRepository);
    var questionnaire = new Questionnaire(rules, collection.asArray());
    var presenter = new QuestionnairePresenter(questionnaire, view);
    return {
        view: view,
        result: function () { return resultBuilder(questionnaire); }
    };
}
function resultBuilder(questionnaire) {
    return questionnaire.allQuestions
        .filter(function (question) { return question.answer.isCorrect !== "pending"; })
        .map(function (question) { return ({
        text: question.title,
        isCorrect: question.answer.isCorrect === "yes"
    }); });
}
