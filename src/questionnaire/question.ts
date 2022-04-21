import {QuestionProperties} from "./types/questionProperties";
import {QuestionResult} from "./types/questionResult";

export class Question {
    private readonly _questionProperties: QuestionProperties;
    private _selectedAnswerIndex: number;
    private _result: QuestionResult;

    constructor(questionProperties: QuestionProperties) {
        this._questionProperties = questionProperties;
        this._selectedAnswerIndex = 0;
        this._result = {
            givenAnswer: -1,
            answeredCorrectly: false,
            answers: this._questionProperties.answers.map(answer => ({isCorrect: false, text: answer}))
        };
    }

    public get title(): string {
        return this._questionProperties.title;
    }

    public get properties(): QuestionProperties {
        return this._questionProperties;
    }

    public get result(): QuestionResult {
        return this._result;
    }

    selectAnswer(answerIndex: number) {
        this._selectedAnswerIndex = answerIndex;
    }

    confirmAnswer() {
        this._result = {
            givenAnswer: this._selectedAnswerIndex,
            answeredCorrectly: this.wasAnsweredCorrectly,
            answers: this.answers
        };
    }

    private get wasAnsweredCorrectly(): boolean {
        return this._selectedAnswerIndex == this._questionProperties.correctAnswerIndex;
    }

    private get answers(): {isCorrect: boolean, text: string}[] {
        return this._questionProperties.answers.map((answer, index) => {
            return {
                isCorrect: this._questionProperties.correctAnswerIndex == index,
                text: answer
            }
        });
    }
}