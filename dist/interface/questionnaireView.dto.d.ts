import { AnswerViewModel, QuestionnaireView } from "../domain/questionnaire";
export declare class QuestionnaireViewDto implements QuestionnaireView {
    answers: AnswerViewModel[];
    score: number;
    title: string;
    questionnaireStatus: "pending" | "success" | "failed";
    userAction: "pending" | "confirm" | "next" | "success" | "failed";
    updateAnswers(answers: AnswerViewModel[]): void;
    updateScore(score: number): void;
    updateTitle(title: string): void;
    updateQuestionnaireStatus(status: "pending" | "success" | "failed"): void;
    updateUserAction(action: "pending" | "confirm" | "next" | "success" | "failed"): void;
}
