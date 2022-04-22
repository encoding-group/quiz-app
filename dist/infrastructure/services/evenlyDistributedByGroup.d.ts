import { QuestionCollection } from "../../domain/questionnaire";
import { QuestionProps, QuestionsRepository } from "../../";
export declare class EvenlyDistributedByGroup implements QuestionCollection {
    private _repository;
    constructor(repository: QuestionsRepository);
    asArray(): QuestionProps[];
}
