import {
    EvenlyDistributedByGroup,
    Question,
    Questionnaire,
    QuestionnairePresenter,
    QuestionsRepository,
    YamlQuestionsDataContext
} from "../src";
import {readFileSync} from "fs";
import {QuestionnaireRules} from "../dist";

describe('persistence', () => {
    test('parser', () => {
        const content = readFileSync(__dirname + '/data/test.yaml', 'utf-8');
        const context = new YamlQuestionsDataContext(content);
        const repository = new QuestionsRepository(context);
        const collection = new EvenlyDistributedByGroup(repository);
        const rules: QuestionnaireRules = {
            correctAnswersMinimum: 5,
            incorrectAnswersMaximum: 3
        }
        const questionnaire = new Questionnaire(rules, collection.asArray());
        // const presenter = new QuestionnairePresenter(questionnaire, mockUi);
        // presenter.start();
    });
});

