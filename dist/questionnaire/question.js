var Question = /** @class */ (function () {
    function Question(questionProperties) {
        this._questionProperties = questionProperties;
        this._selectedAnswerIndex = 0;
        this._result = {
            givenAnswer: -1,
            answeredCorrectly: false,
            answers: this._questionProperties.answers.map(function (answer) { return ({ isCorrect: false, text: answer }); })
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
        this._result = {
            givenAnswer: this._selectedAnswerIndex,
            answeredCorrectly: this.wasAnsweredCorrectly,
            answers: this.answers
        };
    };
    Object.defineProperty(Question.prototype, "wasAnsweredCorrectly", {
        get: function () {
            return this._selectedAnswerIndex == this._questionProperties.correctAnswerIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answers", {
        get: function () {
            var _this = this;
            return this._questionProperties.answers.map(function (answer, index) {
                return {
                    isCorrect: _this._questionProperties.correctAnswerIndex == index,
                    text: answer
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    return Question;
}());
export { Question };
