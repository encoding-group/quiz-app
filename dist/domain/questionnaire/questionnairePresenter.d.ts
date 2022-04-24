import { Questionnaire, QuestionnaireView } from ".";
export declare class QuestionnairePresenter {
    private _questionnaire;
    private _ui;
    constructor(questionnaire: Questionnaire, ui: QuestionnaireView);
    private start;
    private nextQuestion;
    private selectAnswer;
    private confirmAnswer;
    private get score();
    private get currentQuestion();
    private get currentAnswer();
}
