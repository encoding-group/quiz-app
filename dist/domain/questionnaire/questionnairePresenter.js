var QuestionnairePresenter = /** @class */ (function () {
    function QuestionnairePresenter(questionnaire, ui) {
        this._questionnaire = questionnaire;
        this._ui = ui;
    }
    QuestionnairePresenter.prototype.start = function () {
        var answers = this.currentQuestion.choices.map(function (choice) {
            return {
                state: 'default',
                text: choice.text,
                label: ''
            };
        });
        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateCorrectAnsweredCount(this.correctAnswersCount);
    };
    QuestionnairePresenter.prototype.nextQuestion = function () {
        this._questionnaire.next();
        var answers = this.currentQuestion.choices.map(function (choice) {
            return {
                state: 'default',
                text: choice.text,
                label: ''
            };
        });
        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateAllowNext(false);
    };
    QuestionnairePresenter.prototype.selectAnswer = function (answerIndex) {
        this._questionnaire.selectAnswer(answerIndex);
        var answers = this.currentQuestion.choices.map(function (choice, index) {
            return {
                state: answerIndex === index ? 'highlighted' : 'default',
                text: choice.text,
                label: ''
            };
        });
        this._ui.updateAnswers(answers);
    };
    QuestionnairePresenter.prototype.confirmAnswer = function () {
        var _this = this;
        this._questionnaire.confirmAnswer();
        var answers = this.currentQuestion.choices.map(function (choice, index) {
            var currentQuestion = _this._questionnaire.currentQuestion;
            return {
                state: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'correct' : 'incorrect')
                    : 'default',
                text: choice.text,
                label: currentQuestion.answer.given === index
                    ? (choice.isCorrect ? 'Correct' : 'Incorrect')
                    : ''
            };
        });
        this._ui.updateAnswers(answers);
        this._ui.updateCorrectAnsweredCount(this.correctAnswersCount);
        this._ui.updateAllowNext(true);
    };
    Object.defineProperty(QuestionnairePresenter.prototype, "correctAnswersCount", {
        get: function () {
            return this._questionnaire.allQuestions
                .filter(function (question) { return question.answer.isCorrect; })
                .length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionnairePresenter.prototype, "currentQuestion", {
        get: function () {
            return this._questionnaire.currentQuestion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionnairePresenter.prototype, "currentAnswer", {
        get: function () {
            return this._questionnaire.currentQuestion.answer;
        },
        enumerable: false,
        configurable: true
    });
    return QuestionnairePresenter;
}());
export { QuestionnairePresenter };
