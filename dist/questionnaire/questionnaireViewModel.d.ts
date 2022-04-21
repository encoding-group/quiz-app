import { QuestionView } from "./questionView";
import { Questionnaire } from "./questionnaire";
export declare class QuestionnaireViewModel {
    private _questionnaire;
    private _ui;
    constructor(questionnaire: Questionnaire, ui: QuestionView);
    start(): void;
    nextQuestion(): void;
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
    private get correctAnswersCount();
    private get currentResult();
}
