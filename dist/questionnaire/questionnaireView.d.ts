import { AnswerViewModel } from "./types/answerViewModel";
export interface QuestionnaireView {
    updateAllowNext(allowNext: boolean): void;
    updateAnswers(answers: AnswerViewModel[]): void;
    updateCorrectAnsweredCount(correctlyAnsweredCount: number): void;
    updateTitle(title: string): void;
}
