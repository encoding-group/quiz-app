var Question = /** @class */ (function () {
    function Question(questionProperties) {
        this._questionProperties = questionProperties;
        this._selectedAnswerIndex = 0;
        this._result = {
            givenAnswer: -1,
            answeredCorrectly: false,
            results: this._questionProperties.answers.map(function (answer) { return ({ isCorrect: false, text: answer }); })
        };
    }
    Object.defineProperty(Question.prototype, "title", {
        get: function () {
            return this._questionProperties.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "properties", {
        get: function () {
            return this._questionProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Question.prototype.selectAnswer = function (answerIndex) {
        this._selectedAnswerIndex = answerIndex;
    };
    Question.prototype.confirmAnswer = function () {
        var _this = this;
        var results = this._questionProperties.answers.map(function (answer, index) {
            return {
                isCorrect: _this._questionProperties.correctAnswerIndex == index,
                text: answer
            };
        });
        this._result = {
            givenAnswer: this._selectedAnswerIndex,
            answeredCorrectly: this._selectedAnswerIndex == this._questionProperties.correctAnswerIndex,
            results: results
        };
    };
    return Question;
}());
export { Question };
