import { Question, QuestionnaireRules } from "./index";
export declare class Questionnaire {
    private readonly _logic;
    private readonly _questions;
    private _currentQuestionIndex;
    constructor(logic: QuestionnaireRules, questions: Question[]);
    get currentQuestion(): Question;
    get allQuestions(): Question[];
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
    next(): void;
}
