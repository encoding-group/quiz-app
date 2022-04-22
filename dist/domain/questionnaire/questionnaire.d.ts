import { Question, QuestionnaireRules } from "./index";
export declare class Questionnaire {
    private readonly _logic;
    private readonly _questions;
    private _currentQuestionIndex;
    private _score;
    private _attempts;
    constructor(logic: QuestionnaireRules, questions: Question[]);
    get currentQuestion(): Question;
    get allQuestions(): Question[];
    get score(): number;
    get attempts(): number;
    get correctAnswersCount(): number;
    get incorrectAnswersCount(): number;
    get status(): ("pending" | "success" | "failed");
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
    next(): void;
}
