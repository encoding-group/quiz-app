import {DataContext} from "./dataContext";
import {QuestionProperties} from "../questionnaire";
import {QuestionRepository} from "./questionRepository";

export class Questions implements QuestionRepository {
    private _context: DataContext;

    constructor(context: DataContext) {
        this._context = context;
    }

    deleteById(id: number): void {
        this._context.deleteQuestionById(id);
    }

    getByCategory(category: string): QuestionProperties[] {
        return this._context.getQuestions().filter((question: QuestionProperties) => question.category === category);
    }

    getById(id: number): QuestionProperties {
        const questionProperties = this._context.getQuestions().find(question => question.id === id);

        if (!questionProperties)
            throw Error(`Could not find question with id ${id}.`);

        return questionProperties;
    }

    getCategories(): string[] {
        const categories: string[] = this._context.getQuestions().map(question => question.category);
        return [...new Set<string>(categories)];
    }

    count(): number {
        return this._context.getQuestions().length;
    }
}