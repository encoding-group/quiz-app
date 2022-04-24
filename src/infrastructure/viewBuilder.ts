import {
    Choice,
    Question,
    Questionnaire,
    QuestionnairePresenter,
    QuestionnaireRules,
    QuestionProps
} from "../domain/questionnaire";
import {QuestionnaireView} from "../domain/questionnaire";
import {QuestionPropsDataContext, QuestionsRepository} from "./persistence";
import {EvenlyDistributedByGroup} from "./services";

export function viewBuilder(rules: QuestionnaireRules, props: QuestionProps[], view: QuestionnaireView): {view: QuestionnaireView, result: () => Choice[]} {
    const context = new QuestionPropsDataContext(props);
    const questionsRepository = new QuestionsRepository(context);
    const collection = new EvenlyDistributedByGroup(questionsRepository);
    const questionnaire = new Questionnaire(rules, collection.asArray());
    const presenter = new QuestionnairePresenter(questionnaire, view);

    return {
        view,
        result: () => resultBuilder(questionnaire)
    };
}

function resultBuilder(questionnaire: Questionnaire): Choice[] {
    return questionnaire.allQuestions
        .filter((question: Question) => question.answer.isCorrect !== "pending")
        .map((question: Question): Choice => ({
            text: question.title,
            isCorrect: question.answer.isCorrect === "yes"
        }));
}
