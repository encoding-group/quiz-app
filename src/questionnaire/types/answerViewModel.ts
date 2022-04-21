export type AnswerViewModel = {
    state: 'correct' | 'incorrect' | 'highlighted' | 'default';
    text: string;
    label: string;
}