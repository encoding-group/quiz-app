"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvenlyDistributedByGroup = void 0;
var questionnaire_1 = require("../../domain/questionnaire");
var EvenlyDistributedByGroup = /** @class */ (function () {
    function EvenlyDistributedByGroup(repository) {
        this._repository = repository;
    }
    EvenlyDistributedByGroup.prototype.asArray = function () {
        var _this = this;
        var groups = this._repository.getCategories()
            .sort(function () { return (Math.random() > .5) ? 1 : -1; });
        var questions = [];
        while (this._repository.count() > 0) {
            groups.forEach(function (group) {
                var subCollection = _this._repository.getByCategory(group)
                    .sort(function () { return (Math.random() > .5) ? 1 : -1; });
                if (subCollection.length > 0) {
                    questions.push(subCollection[0]);
                    _this._repository.deleteById(subCollection[0].id);
                }
            });
        }
        this._repository.restore();
        return questions.map(function (props) { return new questionnaire_1.Question(props); });
    };
    return EvenlyDistributedByGroup;
}());
exports.EvenlyDistributedByGroup = EvenlyDistributedByGroup;
