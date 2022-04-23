import { QuestionsDataContext } from "./questionsDataContext";
import { QuestionProps } from "../../domain/questionnaire";
export declare class QuestionPropsDataContext implements QuestionsDataContext {
    private _propsRaw;
    private _questions;
    constructor(questionsProps: QuestionProps[]);
    getQuestions(): QuestionProps[];
    deleteQuestionById(id: number): void;
    restore(): void;
}
