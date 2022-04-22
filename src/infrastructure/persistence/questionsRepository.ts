import {QuestionsDataContext} from "./questionsDataContext";
import {QuestionProps} from "../../domain/questionnaire";

export class QuestionsRepository {
    private _context: QuestionsDataContext;

    constructor(context: QuestionsDataContext) {
        this._context = context;
    }

    restore(): void {
        this._context.restore();
    }

    deleteById(id: number): void {
        this._context.deleteQuestionById(id);
    }

    getByCategory(category: string): QuestionProps[] {
        return this._context.getQuestions().filter((question: QuestionProps) => question.category === category);
    }

    getById(id: number): QuestionProps {
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