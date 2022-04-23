import {AnswerViewModel} from "./index";

export interface QuestionnaireView {
    updateAnswers(answers: AnswerViewModel[]): void;
    updateScore(score: number): void;
    updateTitle(title: string): void;
    updateQuestionnaireStatus(status: "pending" | "success" | "failed"): void;
    updateUserAction(action: UserAction): void;
}

export type UserAction = "pending" | "confirm" | "next" | "wrong_attempt" | "success" | "failed";
