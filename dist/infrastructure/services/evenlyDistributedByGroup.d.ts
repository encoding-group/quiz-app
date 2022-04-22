import { Question, QuestionCollection } from "../../domain/questionnaire";
import { QuestionsRepository } from "../../";
export declare class EvenlyDistributedByGroup implements QuestionCollection {
    private _repository;
    constructor(repository: QuestionsRepository);
    asArray(): Question[];
}
