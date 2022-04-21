import {QuestionProperties} from "../questionnaire";

export interface DataContext {
    getQuestions(): QuestionProperties[];
    deleteQuestionById(id: number): void;
    restore(): void;
}