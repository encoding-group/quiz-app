import { QuestionProperties } from "./types/questionProperties";
import { QuestionResult } from "./types/questionResult";
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
    private get wasAnsweredCorrectly();
    private get answers();
}
