import { QuestionProperties } from "./questionProperties";
import { QuestionResult } from "./questionResult";
export declare class Question {
    private readonly _questionProperties;
    private _selectedAnswerIndex;
    private _result;
    constructor(questionProperties: QuestionProperties);
    get title(): string;
    get properties(): QuestionProperties;
    get result(): QuestionResult;
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
}
