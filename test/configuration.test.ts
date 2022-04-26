import {QuizConfiguration} from "../src";
import * as path from "path";
import * as fs from "fs";
import {parse} from "yaml";

describe('configuration', () => {
    test('', () => {
        const config1 = fs.readFileSync(path.resolve(__dirname, 'data', 'testConfig1.yml'), 'utf-8');
        const config2 = fs.readFileSync(path.resolve(__dirname, 'data', 'testConfig2.yml'), 'utf-8');

        const settings = new QuizConfiguration();
        settings.add('', parse(config1));
        settings.add('', parse(config2));

        console.log(settings.getRegex(/design.*/g))
    });
});