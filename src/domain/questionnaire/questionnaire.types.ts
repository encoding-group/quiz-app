export type AnswerViewModel = {
    state: 'correct' | 'incorrect' | 'highlighted' | 'default';
    text: string;
    label: string;
}

export type Choice = {
    isCorrect: boolean;
    text: string;
}

export type QuestionnaireRules = {
    correctAnswersMinimum: number;
    incorrectAnswersMaximum: number;
}

export type QuestionProps = {
    id: number;
    title: string;
    category: string;
    correctAnswerIndex: number;
    answers: string[];
}
