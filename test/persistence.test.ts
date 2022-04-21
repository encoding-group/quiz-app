import {Questions, YamlQuestionsDataContext} from "../src/persistence";
import {QuestionProperties} from "../src";
import {readFileSync} from "fs";
import {QuestionRepository} from "../src/persistence/questionRepository";

describe('persistence', () => {
    test('parser', () => {
        const content = readFileSync(__dirname + '/data/test.yaml', 'utf-8');
        const context = new YamlQuestionsDataContext(content);
        const repository = new Questions(context);
        const collection = new EvenlyDistributedByGroup(repository);

        console.log(collection.asArray().map(q => q.category));
    });
});

interface QuestionCollection {
    asArray(): QuestionProperties[];
}

class EvenlyDistributedByGroup implements QuestionCollection {
    private _repository: QuestionRepository;

    constructor(repository: QuestionRepository) {
        this._repository = repository;
    }

    asArray(): QuestionProperties[] {
        const groups = this._repository.getCategories()
            .sort(() => (Math.random() > .5) ? 1 : -1);

        const questions: QuestionProperties[] = [];

        while (this._repository.count() > 0) {
            groups.forEach(group => {
                const subCollection = this._repository.getByCategory(group)
                    .sort(() => (Math.random() > .5) ? 1 : -1);

                if (subCollection.length > 0) {
                    questions.push(subCollection[0])
                    this._repository.deleteById(subCollection[0].id);
                }
            });
        }

        return questions;
    }
}