var QuestionnairePresenter = /** @class */ (function () {
    function QuestionnairePresenter(questionnaire, ui) {
        this._questionnaire = questionnaire;
        this._ui = ui;
    }
    QuestionnairePresenter.prototype.start = function () {
        var answers = this.currentResult.answers.map(function (result) {
            return {
                state: 'default',
                text: result.text,
                label: ''
            };
        });
        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateCorrectAnsweredCount(this.correctAnswersCount);
    };
    QuestionnairePresenter.prototype.nextQuestion = function () {
        this._questionnaire.next();
        var answers = this.currentResult.answers.map(function (result) {
            return {
                state: 'default',
                text: result.text,
                label: ''
            };
        });
        this._ui.updateTitle(this._questionnaire.currentQuestion.title);
        this._ui.updateAnswers(answers);
        this._ui.updateAllowNext(false);
    };
    QuestionnairePresenter.prototype.selectAnswer = function (answerIndex) {
        this._questionnaire.selectAnswer(answerIndex);
        var answers = this.currentResult.answers.map(function (result, index) {
            return {
                state: answerIndex === index ? 'highlighted' : 'default',
                text: result.text,
                label: ''
            };
        });
        this._ui.updateAnswers(answers);
    };
    QuestionnairePresenter.prototype.confirmAnswer = function () {
        var _this = this;
        this._questionnaire.confirmAnswer();
        var answers = this.currentResult.answers.map(function (result, index) {
            var currentQuestion = _this._questionnaire.currentQuestion;
            return {
                state: currentQuestion.result.givenAnswer === index
                    ? (result.isCorrect ? 'correct' : 'incorrect')
                    : 'default',
                text: result.text,
                label: currentQuestion.result.givenAnswer === index
                    ? (result.isCorrect ? 'Correct' : 'Incorrect')
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
                .filter(function (question) { return question.result.answeredCorrectly; })
                .length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionnairePresenter.prototype, "currentResult", {
        get: function () {
            return this._questionnaire.currentQuestion.result;
        },
        enumerable: false,
        configurable: true
    });
    return QuestionnairePresenter;
}());
export { QuestionnairePresenter };
