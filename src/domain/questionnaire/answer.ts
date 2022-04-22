export class Answer {
    private readonly _givenAnswerIndex: number;
    private readonly _correctAnswerIndex: number;

    constructor(givenAnswerIndex: number, correctAnswerIndex: number) {
        this._givenAnswerIndex = givenAnswerIndex;
        this._correctAnswerIndex = correctAnswerIndex;
    }

    public get isCorrect(): "pending" | "yes" | "no" {
        if (this._correctAnswerIndex < 0 || this._givenAnswerIndex < 0)
            return "pending";

        return this._correctAnswerIndex === this._givenAnswerIndex ? "yes" : "no";
    }

    public get given(): number {
        return this._givenAnswerIndex;
    }
}