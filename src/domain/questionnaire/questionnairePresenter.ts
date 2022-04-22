import {Answer, AnswerViewModel, Question, Questionnaire, QuestionnaireView, Choice} from "./index";

export class QuestionnairePresenter {
    private _questionnaire: Questionnaire;
    private _ui: QuestionnaireView;

    constructor(questionnaire: Questionnaire, ui: QuestionnaireView) {
        this._questionnaire = questionnaire;
        this._ui = ui;
    }

    public start(): void {
        const answers = this.currentQuestion.choices.map((choice: Choice): AnswerViewModel => {
            return {
                state: 'default',
                text: choice.text,
                label: ''
            }
        });

        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateCorrectAnsweredCount(this.correctAnswersCount);
    }

    public nextQuestion(): void {
        this._questionnaire.next();

        const answers = this.currentQuestion.choices.map((choice: Choice): AnswerViewModel => {
            return {
                state: 'default',
                text: choice.text,
                label: ''
            }
        });

        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateAllowNext(false);
    }

    public selectAnswer(answerIndex: number): void {
        this._questionnaire.selectAnswer(answerIndex);

        const answers = this.currentQuestion.choices.map((choice: Choice, index: number): AnswerViewModel => {
            return {
                state: answerIndex === index ? 'highlighted' : 'default',
                text: choice.text,
                label: ''
            }
        });

        this._ui.updateAnswers(answers);
    }

    public confirmAnswer(): void {
        this._questionnaire.confirmAnswer();

        const answers = this.currentQuestion.choices.map((choice: Choice, index: number): AnswerViewModel => {
            const currentQuestion = this._questionnaire.currentQuestion;

            return {
                state: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'correct' : 'incorrect')
                    : 'default',
                text: choice.text,
                label: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'Correct' : 'Incorrect')
                    : ''
            }
        });

        this._ui.updateAnswers(answers);
        this._ui.updateCorrectAnsweredCount(this.correctAnswersCount);
        this._ui.updateAllowNext(true);
    }

    private get correctAnswersCount(): number {
        return this._questionnaire.allQuestions
            .filter(question => question.answer.isCorrect)
            .length;
    }

    private get currentQuestion(): Question {
        return this._questionnaire.currentQuestion;
    }

    private get currentAnswer(): Answer {
        return this._questionnaire.currentQuestion.answer;
    }
}