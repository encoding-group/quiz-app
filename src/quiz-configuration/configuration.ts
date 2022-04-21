import {ConfigurationProperties} from "./configurationProperties";

export class Configuration {
    private _properties: ConfigurationProperties;

    constructor(properties: ConfigurationProperties) {
        this._properties = properties;
    }

}