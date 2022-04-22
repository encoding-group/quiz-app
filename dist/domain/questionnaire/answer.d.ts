export declare class Answer {
    private readonly _givenAnswerIndex;
    private readonly _correctAnswerIndex;
    constructor(givenAnswerIndex: number, correctAnswerIndex: number);
    get isCorrect(): boolean;
    get given(): number;
}
