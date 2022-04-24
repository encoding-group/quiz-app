import {AnswerViewModel} from ".";
import {UserAction} from "./questionnaire.types";

export interface QuestionnaireView {
    onStart?: () => void;
    onSelectAnswer?: (index: number) => void;
    onConfirmAnswer?: () => void;
    onNextQuestion?: () => void;
    updateAnswers(answers: AnswerViewModel[]): void;
    updateScore(score: number): void;
    updateTitle(title: string): void;
    updateQuestionnaireStatus(status: "pending" | "success" | "failed"): void;
    updateUserAction(action: UserAction): void;
    lockAnswerSelection(): void;
    unlockAnswerSelection(): void;
}
