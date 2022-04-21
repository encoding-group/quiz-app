export type QuestionResult = {
    givenAnswer: number;
    answeredCorrectly: boolean;
    answers: {isCorrect: boolean, text: string}[];
}

