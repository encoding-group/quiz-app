import {EvenlyDistributedByGroup, QuestionsRepository, YamlQuestionsDataContext} from "../src";
import {readFileSync} from "fs";

describe('persistence', () => {
    test('parser', () => {
        const content = readFileSync(__dirname + '/data/test.yaml', 'utf-8');
        const context = new YamlQuestionsDataContext(content);
        const repository = new QuestionsRepository(context);
        const collection = new EvenlyDistributedByGroup(repository);

        console.log(collection.asArray().map(q => q.category));
    });
});

