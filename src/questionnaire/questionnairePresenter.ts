import {QuestionnaireView} from "./questionnaireView";
import {Questionnaire} from "./questionnaire";
import {AnswerViewModel} from "./types/answerViewModel";
import {QuestionResult} from "./types/questionResult";

export class QuestionnairePresenter {
    private _questionnaire: Questionnaire;
    private _ui: QuestionnaireView;

    constructor(questionnaire: Questionnaire, ui: QuestionnaireView) {
        this._questionnaire = questionnaire;
        this._ui = ui;
    }

    public start(): void {
        const answers = this.currentResult.answers.map((result): AnswerViewModel => {
            return {
                state: 'default',
                text: result.text,
                label: ''
            }
        });

        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateCorrectAnsweredCount(this.correctAnswersCount);
    }

    public nextQuestion(): void {
        this._questionnaire.next();

        const answers = this.currentResult.answers.map((result): AnswerViewModel => {
            return {
                state: 'default',
                text: result.text,
                label: ''
            }
        });

        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateAllowNext(false);
    }

    public selectAnswer(answerIndex: number): void {
        this._questionnaire.selectAnswer(answerIndex);

        const answers = this.currentResult.answers.map((result, index): AnswerViewModel => {
            return {
                state: answerIndex === index ? 'highlighted' : 'default',
                text: result.text,
                label: ''
            }
        });

        this._ui.updateAnswers(answers);
    }

    public confirmAnswer(): void {
        this._questionnaire.confirmAnswer();

        const answers = this.currentResult.answers.map((result, index): AnswerViewModel => {
            const currentQuestion = this._questionnaire.currentQuestion;

            return {
                state: currentQuestion.result.givenAnswer === index
                    ? (result.isCorrect ? 'correct' : 'incorrect')
                    : 'default',
                text: result.text,
                label: currentQuestion.result.givenAnswer === index
                    ? (result.isCorrect ? 'Correct' : 'Incorrect')
                    : ''
            }
        });

        this._ui.updateAnswers(answers);
        this._ui.updateCorrectAnsweredCount(this.correctAnswersCount);
        this._ui.updateAllowNext(true);
    }

    private get correctAnswersCount(): number {
        return this._questionnaire.allQuestions
            .filter(question => question.result.answeredCorrectly)
            .length;
    }

    private get currentResult(): QuestionResult {
        return this._questionnaire.currentQuestion.result;
    }
}