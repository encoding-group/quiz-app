import {QuestionsDataContext} from "./questionsDataContext";
import {QuestionProps} from "../../domain/questionnaire";

export class QuestionPropsDataContext implements QuestionsDataContext {
    private _propsRaw: QuestionProps[];
    private _questions: QuestionProps[];

    constructor(questionsProps: QuestionProps[]) {
        this._propsRaw = questionsProps;
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
        this._questions = this._propsRaw.map((props: QuestionProps): QuestionProps => props);
    }
}