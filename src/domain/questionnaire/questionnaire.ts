import {Question, QuestionnaireRules} from "./index";

export class Questionnaire {
    private readonly _logic: QuestionnaireRules;
    private readonly _questions: Question[];
    private _currentQuestionIndex: number;
    private _score: number = 0;
    private _attempts: number = 0;

    constructor(logic: QuestionnaireRules, questions: Question[]) {
        this._logic = logic;
        this._questions = questions;
        this._currentQuestionIndex = 0;
        this._attempts = logic.incorrectAnswersMaximum;
    }

    get currentQuestion(): Question {
        return this._questions[this._currentQuestionIndex];
    }

    get allQuestions(): Question[] {
        return this._questions;
    }

    get score(): number {
        return this._score;
    }

    get attempts(): number {
        return this._attempts;
    }

    get correctAnswersCount(): number {
        return this.allQuestions.filter((question: Question): boolean => question.answer.isCorrect === "yes").length;
    }

    get incorrectAnswersCount(): number {
        return this.allQuestions.filter((question: Question): boolean => question.answer.isCorrect === "no").length;
    }

    get status(): ("pending" | "success" | "failed") {
        if (this.attempts <= 0)
            return "failed";

        if (this.score >= this._logic.correctAnswersMinimum)
            return "success";

        return "pending";
    }

    selectAnswer(answerIndex: number) {
        this.currentQuestion.selectAnswer(answerIndex);
    }

    confirmAnswer() {
        this.currentQuestion.confirmAnswer();

        if (this.currentQuestion.answer.isCorrect === "yes") {
            this._score++;
            return;
        }

        if (this.currentQuestion.answer.isCorrect === "no") {
            this._score = 0;
            this._attempts--;
        }
    }

    next() {
        this._currentQuestionIndex = this._currentQuestionIndex + 1 < this._questions.length
            ? this._currentQuestionIndex + 1
            : this._questions.length - 1;
    }
}

