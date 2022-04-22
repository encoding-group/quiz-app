import { AnswerViewModel } from "./index";
export interface QuestionnaireView {
    updateAllowNext(allowNext: boolean): void;
    updateAnswers(answers: AnswerViewModel[]): void;
    updateCorrectAnsweredCount(correctlyAnsweredCount: number): void;
    updateTitle(title: string): void;
}
