import { QuestionAnswerViewModel } from "./questionAnswerViewModel";
export interface QuestionView {
    render(title: string, answers: QuestionAnswerViewModel[]): void;
    highlightAnswer(answers: QuestionAnswerViewModel[]): void;
    confirmAnswer(answers: QuestionAnswerViewModel[]): void;
    updateCorrectAnsweredCount(correctlyAnsweredCount: number): void;
}
