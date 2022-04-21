import { QuestionAnswerViewModel } from "./questionAnswerViewModel";
export interface QuestionUi {
    render(title: string, answers: QuestionAnswerViewModel[]): void;
    highlightAnswer(answers: QuestionAnswerViewModel[]): void;
    confirmAnswer(answers: QuestionAnswerViewModel[]): void;
}
