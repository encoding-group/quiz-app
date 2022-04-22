export declare type AnswerViewModel = {
    state: 'correct' | 'incorrect' | 'highlighted' | 'default';
    text: string;
    label: string;
};
export declare type Choice = {
    isCorrect: boolean;
    text: string;
};
export declare type QuestionnaireRules = {
    correctAnswersMinimum: number;
    incorrectAnswersMaximum: number;
};
export declare type QuestionProps = {
    id: number;
    title: string;
    category: string;
    correctAnswerIndex: number;
    answers: string[];
};
