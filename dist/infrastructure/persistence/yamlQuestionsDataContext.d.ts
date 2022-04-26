import { QuestionProps } from "../../domain/questionnaire";
import { QuestionsDataContext } from "./questionsDataContext";
export declare class YamlQuestionsDataContext implements QuestionsDataContext {
    private readonly _rawContent;
    private _questions;
    constructor(rawContent: string);
    getQuestions(): QuestionProps[];
    deleteQuestionById(id: number): void;
    restore(): void;
}
