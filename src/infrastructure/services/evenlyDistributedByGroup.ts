import {Question, QuestionCollection} from "../../domain/questionnaire";
import {QuestionProps, QuestionsRepository} from "../../";

export class EvenlyDistributedByGroup implements QuestionCollection {
    private _repository: QuestionsRepository;

    constructor(repository: QuestionsRepository) {
        this._repository = repository;
    }

    asArray(): Question[] {
        const groups = this._repository.getCategories()
            .sort(() => (Math.random() > .5) ? 1 : -1);

        const questions: QuestionProps[] = [];

        while (this._repository.count() > 0) {
            groups.forEach((group: any) => {
                const subCollection = this._repository.getByCategory(group)
                    .sort(() => (Math.random() > .5) ? 1 : -1);

                if (subCollection.length > 0) {
                    questions.push(subCollection[0])
                    this._repository.deleteById(subCollection[0].id);
                }
            });
        }

        this._repository.restore();

        return questions.map((props: QuestionProps) => new Question(props));
    }
}