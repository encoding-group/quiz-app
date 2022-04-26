import { ConfigurationProp, ConfigurationProps } from "./configurationProps";
export declare class QuizConfiguration {
    private readonly _config;
    add(namespace: string, config: any): void;
    get(path: string): ConfigurationProp;
    getRegex(expression: RegExp): ConfigurationProps;
    get asJSON(): string;
    static fromJSON(json: string): QuizConfiguration;
    private static flattenObject;
}
