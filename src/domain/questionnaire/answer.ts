export class Answer {
    private readonly _givenAnswerIndex: number;
    private readonly _correctAnswerIndex: number;

    constructor(givenAnswerIndex: number, correctAnswerIndex: number) {
        this._givenAnswerIndex = givenAnswerIndex;
        this._correctAnswerIndex = correctAnswerIndex;
    }

    public get isCorrect(): boolean {
        if (this._correctAnswerIndex < 0 || this._givenAnswerIndex < 0)
            return false;

        return this._correctAnswerIndex === this._givenAnswerIndex;
    }

    public get given(): number {
        return this._givenAnswerIndex;
    }
}