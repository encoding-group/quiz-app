import {QuestionProps} from "../../domain/questionnaire";

export interface QuestionsDataContext {
    getQuestions(): QuestionProps[];
    deleteQuestionById(id: number): void;
    restore(): void;
}