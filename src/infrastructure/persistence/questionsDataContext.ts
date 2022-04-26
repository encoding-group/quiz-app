import {QuestionProps} from "../../domain/questionnaire";

export interface QuestionsDataContext {
    getQuestions(): QuestionProps[];
    deleteQuestionById(id: number): void;
    restore(): void;
}

export function convertToQuestionProperties(intermediate: any): QuestionProps[] {
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
