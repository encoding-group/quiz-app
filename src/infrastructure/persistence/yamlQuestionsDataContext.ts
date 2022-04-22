import {QuestionProps} from "../../domain/questionnaire";
import {QuestionsDataContext} from "./questionsDataContext";
import {parse} from "yaml";

export class YamlQuestionsDataContext implements QuestionsDataContext {
    private readonly _rawContent: string;
    private _questions: QuestionProps[];

    constructor(rawContent: string) {
        this._rawContent = rawContent;
        this._questions = [];

        this.restore();
    }

    private convertToQuestionProperties(intermediate: any): QuestionProps[] {
        return intermediate.groups
            .reduce((acc: any[], cur: any) => {
                const groupName: string = cur.title;
                const groupQuestions: any[] = cur.questions;
                groupQuestions.forEach(question => question['group'] = groupName);

                return [...acc, groupQuestions];
            }, [])
            .flat()
            .map((questionData: any, index: number): QuestionProps => ({
                id: index + 1,
                title: questionData.title,
                category: questionData.group,
                correctAnswerIndex: questionData.correctIndex,
                answers: questionData.answers
            }));
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
        this._questions = this.convertToQuestionProperties(parse(this._rawContent));
    }
}