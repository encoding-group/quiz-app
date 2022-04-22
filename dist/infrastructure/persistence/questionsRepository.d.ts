import { QuestionsDataContext } from "./questionsDataContext";
import { QuestionProps } from "../../domain/questionnaire";
export declare class QuestionsRepository {
    private _context;
    constructor(context: QuestionsDataContext);
    deleteById(id: number): void;
    getByCategory(category: string): QuestionProps[];
    getById(id: number): QuestionProps;
    getCategories(): string[];
    count(): number;
}
