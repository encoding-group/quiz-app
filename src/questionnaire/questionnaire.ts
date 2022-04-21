import {QuestionnaireLogic} from "./types/questionnaireLogic";
import {Question} from "./question";

export class Questionnaire {
    private readonly _logic: QuestionnaireLogic;
    private readonly _questions: Question[];
    private _currentQuestionIndex: number;

    constructor(logic: QuestionnaireLogic, questions: Question[]) {
        this._logic = logic;
        this._questions = questions;
        this._currentQuestionIndex = 0;
    }

    get currentQuestion(): Question {
        return this._questions[this._currentQuestionIndex];
    }

    get allQuestions(): Question[] {
        return this._questions;
    }

    selectAnswer(answerIndex: number) {
        this._questions[this._currentQuestionIndex].selectAnswer(answerIndex);
    }

    confirmAnswer() {
        this._questions[this._currentQuestionIndex].confirmAnswer();
    }

    next() {
        this._currentQuestionIndex = this._currentQuestionIndex + 1 < this._questions.length
            ? this._currentQuestionIndex + 1
            : this._questions.length - 1;
    }
}

