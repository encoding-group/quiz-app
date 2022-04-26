"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizConfiguration = void 0;
var QuizConfiguration = /** @class */ (function () {
    function QuizConfiguration() {
        this._config = {};
    }
    QuizConfiguration.prototype.add = function (namespace, config) {
        var flattenObject = QuizConfiguration.flattenObject(config);
        for (var key in flattenObject)
            this._config["".concat(namespace).concat(key)] = flattenObject[key];
    };
    QuizConfiguration.prototype.get = function (path) {
        if (!(path in this._config))
            throw Error("There is no setting at this path: ".concat(path, "."));
        return this._config[path];
    };
    QuizConfiguration.prototype.getRegex = function (expression) {
        var _this = this;
        var matches = Object.keys(this._config).filter(function (key) { return key.match(expression) !== null; });
        return matches.reduce(function (acc, cur) {
            acc[cur] = _this._config[cur];
            return acc;
        }, {});
    };
    Object.defineProperty(QuizConfiguration.prototype, "asJSON", {
        get: function () {
            return JSON.stringify(this._config);
        },
        enumerable: false,
        configurable: true
    });
    QuizConfiguration.fromJSON = function (json) {
        var settings = new QuizConfiguration();
        settings.add('', JSON.parse(json));
        return settings;
    };
    QuizConfiguration.flattenObject = function (object) {
        var result = {};
        for (var i in object) {
            if ((typeof object[i]) === 'object' && !Array.isArray(object[i])) {
                var temp = QuizConfiguration.flattenObject(object[i]);
                for (var j in temp) {
                    result["".concat(i, ".").concat(j)] = temp[j];
                }
            }
            else {
                result[i] = object[i];
            }
        }
        return result;
    };
    return QuizConfiguration;
}());
exports.QuizConfiguration = QuizConfiguration;
