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
exports.convertToQuestionProperties = void 0;
function convertToQuestionProperties(intermediate) {
    return intermediate.groups
        .reduce(function (acc, cur) {
        var groupName = cur.title;
        var groupQuestions = cur.questions;
        groupQuestions.forEach(function (question) { return question['group'] = groupName; });
        return __spreadArray(__spreadArray([], __read(acc), false), [groupQuestions], false);
    }, [])
        .flat()
        .map(function (questionData, index) { return ({
        id: index + 1,
        title: questionData.title,
        category: questionData.group,
        correctAnswerIndex: questionData.correctIndex,
        answers: questionData.answers
    }); });
}
exports.convertToQuestionProperties = convertToQuestionProperties;
