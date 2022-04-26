"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsRepository = void 0;
var QuestionsRepository = /** @class */ (function () {
    function QuestionsRepository(context) {
        this._context = context;
    }
    QuestionsRepository.prototype.restore = function () {
        this._context.restore();
    };
    QuestionsRepository.prototype.deleteById = function (id) {
        this._context.deleteQuestionById(id);
    };
    QuestionsRepository.prototype.getByCategory = function (category) {
        return this._context.getQuestions().filter(function (question) { return question.category === category; });
    };
    QuestionsRepository.prototype.getById = function (id) {
        var questionProperties = this._context.getQuestions().find(function (question) { return question.id === id; });
        if (!questionProperties)
            throw Error("Could not find question with id ".concat(id, "."));
        return questionProperties;
    };
    QuestionsRepository.prototype.getCategories = function () {
        var categories = this._context.getQuestions().map(function (question) { return question.category; });
        return __spreadArray([], __read(new Set(categories)), false);
    };
    QuestionsRepository.prototype.count = function () {
        return this._context.getQuestions().length;
    };
    return QuestionsRepository;
}());
exports.QuestionsRepository = QuestionsRepository;
