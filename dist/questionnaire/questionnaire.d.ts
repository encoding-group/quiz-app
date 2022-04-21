import { QuestionnaireLogic } from "./types/questionnaireLogic";
import { Question } from "./question";
export declare class Questionnaire {
    private readonly _logic;
    private readonly _questions;
    private _currentQuestionIndex;
    constructor(logic: QuestionnaireLogic, questions: Question[]);
    get currentQuestion(): Question;
    get allQuestions(): Question[];
    selectAnswer(answerIndex: number): void;
    confirmAnswer(): void;
    next(): void;
}
