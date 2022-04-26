import {ConfigurationProp, ConfigurationProps} from "./configurationProps";

export class QuizConfiguration {
    private readonly _config: ConfigurationProps = {};

    add(namespace: string, config: any) {
        const flattenObject = QuizConfiguration.flattenObject(config);
        for (const key in flattenObject)
            this._config[`${namespace}${key}`] = flattenObject[key];
    }

    get(path: string): ConfigurationProp {
        if (!(path in this._config))
            throw Error(`There is no setting at this path: ${path}.`);

        return this._config[path];
    }

    getRegex(expression: RegExp): ConfigurationProps {
        const matches = Object.keys(this._config).filter(key => key.match(expression) !== null);

        return matches.reduce((acc: ConfigurationProps, cur: string) => {
            acc[cur] = this._config[cur];

            return acc;
        }, {})
    }

    get asJSON(): string {
        return JSON.stringify(this._config);
    }

    public static fromJSON(json: string): QuizConfiguration {
        const settings = new QuizConfiguration();
        settings.add('', JSON.parse(json));
        return settings;
    }

    private static flattenObject(object: any): any {
        let result: any = {};

        for (const i in object) {
            if ((typeof object[i]) === 'object' && !Array.isArray(object[i])) {
                const temp = QuizConfiguration.flattenObject(object[i]);
                for (const j in temp) {
                    result[`${i}.${j}`] = temp[j];
                }
            } else {
                result[i] = object[i];
            }
        }

        return result;
    }
}