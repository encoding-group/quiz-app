import { Choice, QuestionProps } from "./index";
import { Answer } from "./answer";
export declare class Question {
    private readonly _id;
    private readonly _title;
    private readonly _correctAnswerIndex;
    private readonly _choices;
    private _selectedAnswerIndex;
    private _answer;
    constructor(questionProps: QuestionProps);
    get id(): number;
    get title(): string;
    get answer(): Answer;
    get choices(): Choice[];
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
}
