import { Questionnaire, QuestionnaireView } from "./index";
export declare class QuestionnairePresenter {
    private _questionnaire;
    private _ui;
    constructor(questionnaire: Questionnaire, ui: QuestionnaireView);
    start(): void;
    nextQuestion(): void;
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
    private get score();
    private get currentQuestion();
    private get currentAnswer();
}
