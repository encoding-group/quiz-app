import {AnswerViewModel, QuestionnaireView} from "../domain/questionnaire";

export class QuestionnaireViewDto implements QuestionnaireView {
    public answers: AnswerViewModel[] = [];
    public score: number = 0;
    public title: string = '';
    public questionnaireStatus: "pending" | "success" | "failed" = "pending";
    public userAction: "pending" | "confirm" | "next" | "success" | "failed" = "pending";

    updateAnswers(answers: AnswerViewModel[]): void {
        this.answers = answers;
    }

    updateScore(score: number): void {
        this.score = score;
    }

    updateTitle(title: string): void {
        this.title = title;
    }

    updateQuestionnaireStatus(status: "pending" | "success" | "failed"): void {
        this.questionnaireStatus = status;
    }

    updateUserAction(action: "pending" | "confirm" | "next" | "success" | "failed"): void {
        this.userAction = action;
    }
}