import { QuestionnaireView } from "./questionnaireView";
import { Questionnaire } from "./questionnaire";
export declare class QuestionnairePresenter {
    private _questionnaire;
    private _ui;
    constructor(questionnaire: Questionnaire, ui: QuestionnaireView);
    start(): void;
    nextQuestion(): void;
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
    private get correctAnswersCount();
    private get currentResult();
}
