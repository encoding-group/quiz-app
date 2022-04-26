import {QuestionProps} from "../../domain/questionnaire";
import {QuestionsDataContext, convertToQuestionProperties} from "./questionsDataContext";
import {parse} from "yaml";

export class YamlQuestionsDataContext implements QuestionsDataContext {
    private readonly _rawContent: string;
    private _questions: QuestionProps[];

    constructor(rawContent: string) {
        this._rawContent = rawContent;
        this._questions = [];

        this.restore();
    }

    getQuestions(): QuestionProps[] {
        return this._questions;
    }

    deleteQuestionById(id: number): void {
        const index = this._questions.findIndex((question: QuestionProps) => question.id === id);

        if (index === -1)
            return;

        this._questions.splice(index, 1);
    }

    restore(): void {
        this._questions = convertToQuestionProperties(parse(this._rawContent));
    }
}