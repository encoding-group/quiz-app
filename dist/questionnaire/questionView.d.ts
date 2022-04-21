import { QuestionAnswerViewModel } from "./types/questionAnswerViewModel";
export interface QuestionView {
    updateAllowNext(allowNext: boolean): void;
    updateAnswers(answers: QuestionAnswerViewModel[]): void;
    updateCorrectAnsweredCount(correctlyAnsweredCount: number): void;
    updateTitle(title: string): void;
}
