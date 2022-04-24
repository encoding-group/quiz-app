import {Answer, AnswerViewModel, Question, Questionnaire, QuestionnaireView, Choice} from ".";

export class QuestionnairePresenter {
    private _questionnaire: Questionnaire;
    private _ui: QuestionnaireView;

    constructor(questionnaire: Questionnaire, ui: QuestionnaireView) {
        this._questionnaire = questionnaire;
        this._ui = ui;

        this._ui.onStart = () => this.start();
        this._ui.onSelectAnswer = (index: number) => this.selectAnswer(index);
        this._ui.onConfirmAnswer = () => this.confirmAnswer();
        this._ui.onNextQuestion = () => this.nextQuestion();
    }

    private start(): void {
        const answers = this.currentQuestion.choices.map((choice: Choice): AnswerViewModel => {
            return {
                state: 'default',
                text: choice.text,
                label: ''
            }
        });

        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.unlockAnswerSelection();
        this._ui.updateScore(this.score);
        this._ui.updateUserAction("pending");
    }

    private nextQuestion(): void {
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
        this._ui.unlockAnswerSelection();
        this._ui.updateUserAction("pending");
    }

    private selectAnswer(answerIndex: number): void {
        this._questionnaire.selectAnswer(answerIndex);

        const answers = this.currentQuestion.choices.map((choice: Choice, index: number): AnswerViewModel => {
            return {
                state: answerIndex === index ? 'highlighted' : 'default',
                text: choice.text,
                label: ''
            }
        });

        this._ui.updateAnswers(answers);
        this._ui.updateUserAction("confirm");
    }

    private confirmAnswer(): void {
        this._questionnaire.confirmAnswer();

        const answers = this.currentQuestion.choices.map((choice: Choice, index: number): AnswerViewModel => {
            const currentQuestion = this._questionnaire.currentQuestion;

            return {
                state: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'correct' : 'incorrect')
                    : 'default',
                text: choice.text,
                label: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'correct' : 'incorrect')
                    : ''
            }
        });

        this._ui.updateAnswers(answers);
        this._ui.lockAnswerSelection();
        this._ui.updateScore(this.score);

        if (this._questionnaire.status === "failed") {
            this._ui.updateUserAction("failed");
            return;
        }

        if (this._questionnaire.status === "success") {
            this._ui.updateUserAction("success");
            return;
        }

        if (this.currentQuestion.answer.isCorrect === "no") {
            this._ui.updateUserAction("wrong_attempt");
            return;
        }

        if (this.currentQuestion.answer.isCorrect === "yes") {
            this._ui.updateUserAction("next");
            return;
        }
    }

    private get score(): number {
        return this._questionnaire.score;
    }

    private get currentQuestion(): Question {
        return this._questionnaire.currentQuestion;
    }

    private get currentAnswer(): Answer {
        return this._questionnaire.currentQuestion.answer;
    }
}