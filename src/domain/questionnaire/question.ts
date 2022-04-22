import {Choice, QuestionProps} from "./index";
import {Answer} from "./answer";

export class Question {
    private readonly _id: number;
    private readonly _title: string;
    private readonly _correctAnswerIndex: number;
    private readonly _choices: string[];
    private _selectedAnswerIndex: number;
    private _answer: Answer;

    constructor(questionProps: QuestionProps) {
        this._id = questionProps.id;
        this._title = questionProps.title;
        this._correctAnswerIndex = questionProps.correctAnswerIndex;
        this._choices = questionProps.answers;
        this._selectedAnswerIndex = -1;
        this._answer = new Answer(this._selectedAnswerIndex, this._correctAnswerIndex);
    }

    public get id(): number {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get answer(): Answer {
        return this._answer;
    }

    public get choices(): Choice[] {
        return this._choices.map((choice: string, index: number) => {
            return {
                isCorrect: index === this._correctAnswerIndex,
                text: choice
            }
        });
    }

    selectAnswer(answerIndex: number) {
        this._selectedAnswerIndex = answerIndex;
    }

    confirmAnswer() {
        this._answer = new Answer(this._selectedAnswerIndex, this._correctAnswerIndex);
    }
}