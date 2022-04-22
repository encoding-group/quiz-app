import {AnswerViewModel} from "./index";

export interface QuestionnaireView {
    updateAnswers(answers: AnswerViewModel[]): void;
    updateScore(score: number): void;
    updateTitle(title: string): void;
    updateQuestionnaireStatus(status: "pending" | "success" | "failed"): void;
    updateUserAction(action: "pending" | "confirm" | "next" | "success" | "failed"): void;
}
