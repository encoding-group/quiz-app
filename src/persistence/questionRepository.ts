import {QuestionProperties} from "../questionnaire";

export interface QuestionRepository {
    getCategories(): string[];
    getById(id: number): QuestionProperties;
    getByCategory(category: string): QuestionProperties[];
    deleteById(id: number): void;
    count(): number;
}

