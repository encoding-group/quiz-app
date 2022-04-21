import {
    Questionnaire,
    QuestionnaireView,
    Question,
    QuestionnairePresenter
} from "../src";
import {MockProxy, mock, anyString, anyArray} from "jest-mock-extended";

describe('configuration dto', () => {
    let questionnaire: Questionnaire;
    let mockUi: MockProxy<QuestionnaireView>;

    beforeEach(() => {
        mockUi = mock<QuestionnaireView>();

        const questions: Question[] = [
            {
                title: 'Question 1',
                correctAnswerIndex: 0,
                answers: ['Answer 1', 'Answer 2']
            },
            {
                title: 'Question 2',
                correctAnswerIndex: 1,
                answers: ['Answer 1', 'Answer 2']
            },
            {
                title: 'Question 3',
                correctAnswerIndex: 1,
                answers: ['Answer 1', 'Answer 2']
            },
            {
                title: 'Question 4',
                correctAnswerIndex: 1,
                answers: ['Answer 1', 'Answer 2']
            },
            {
                title: 'Question 5',
                correctAnswerIndex: 1,
                answers: ['Answer 1', 'Answer 2']
            },
            {
                title: 'Question 6',
                correctAnswerIndex: 1,
                answers: ['Answer 1', 'Answer 2']
            },
        ].map(props => new Question(props));

        const logic = {
            groupInstruction: true,
            correctAnswersMinimum: 5,
            incorrectAnswersMaximum: 3
        };

        questionnaire = new Questionnaire(logic, questions);
    });

    test('should create and show a question', () => {
        const viewModel = new QuestionnairePresenter(questionnaire, mockUi);
        viewModel.start();

        expect(mockUi.updateTitle).toHaveBeenCalledWith('Question 1');
        expect(mockUi.updateAnswers).toHaveBeenCalled()
    });

    test('should select the answer of the first question', () => {
        const viewModel = new QuestionnairePresenter(questionnaire, mockUi);
        viewModel.start();
        viewModel.selectAnswer(0);

        expect(mockUi.updateAnswers).toHaveBeenCalledTimes(2);
    });
    //
    // test('should confirm the answer of the first question', () => {
    //     questionnaire.start();
    //
    //     questionnaire.selectAnswer(0);
    //     questionnaire.confirmAnswer();
    //     expect(ui.confirmedAnswer).toBe(0)
    //     expect(ui.options[0].isCorrect).toBeTruthy();
    //     expect(ui.options[1].isCorrect).toBeFalsy();
    //     expect(ui.answeredCorrectly).toBeTruthy();
    //
    //     questionnaire.selectAnswer(1);
    //     questionnaire.confirmAnswer();
    //     expect(ui.confirmedAnswer).toBe(1)
    //     expect(ui.options[0].isCorrect).toBeTruthy();
    //     expect(ui.options[1].isCorrect).toBeFalsy();
    //     expect(ui.answeredCorrectly).toBeFalsy();
    // });
});