import {
    Question,
    QuestionProps,
    Questionnaire,
    QuestionnaireView,
    QuestionnairePresenter,
} from "../src";
import {MockProxy, mock} from "jest-mock-extended";

describe('configuration dto', () => {
    let questionnaire: Questionnaire;
    let mockUi: MockProxy<QuestionnaireView>;

    beforeEach(() => {
        mockUi = mock<QuestionnaireView>();

        const questions: Question[] = [1,2,3,4,5,6]
            .map((id: number): QuestionProps => {
                return {
                    id,
                    title: `Question ${id}`,
                    category: `Category ${id % 3}`,
                    correctAnswerIndex: id % 2,
                    answers: ['Answer 1', 'Answer 2']
                }
            })
            .map((props: QuestionProps) => new Question(props));

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