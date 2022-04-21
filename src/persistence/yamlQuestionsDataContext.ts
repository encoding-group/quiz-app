import {QuestionProperties} from "../questionnaire";
import {DataContext} from "./dataContext";
import {parse} from "yaml";

export class YamlQuestionsDataContext implements DataContext {
    private readonly _rawContent: string;
    private _questions: QuestionProperties[];

    constructor(rawContent: string) {
        this._rawContent = rawContent;
        this._questions = [];

        this.restore();
    }

    private convertToQuestionProperties(intermediate: any): QuestionProperties[] {
        return intermediate.groups
            .reduce((acc: any[], cur: any) => {
                const groupName: string = cur.title;
                const groupQuestions: any[] = cur.questions;
                groupQuestions.forEach(question => question['group'] = groupName);

                return [...acc, groupQuestions];
            }, [])
            .flat()
            .map((questionData: any, index: number): QuestionProperties => ({
                id: index + 1,
                title: questionData.title,
                category: questionData.group,
                correctAnswerIndex: questionData.correctIndex,
                answers: questionData.answers
            }));
    }

    getQuestions(): QuestionProperties[] {
        return this._questions;
    }

    deleteQuestionById(id: number): void {
        const index = this._questions.findIndex((question: QuestionProperties) => question.id === id);

        if (index === -1)
            return;

        this._questions.splice(index, 1);
    }

    restore(): void {
        this._questions = this.convertToQuestionProperties(parse(this._rawContent));
    }
}