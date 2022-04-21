var QuestionnaireViewModel = /** @class */ (function () {
    function QuestionnaireViewModel(questionnaire, ui) {
        this._questionnaire = questionnaire;
        this._ui = ui;
    }
    QuestionnaireViewModel.prototype.start = function () {
        this._questionnaire.start();
        var currentQuestion = this._questionnaire.currentQuestion;
        this._ui.render(currentQuestion.title, currentQuestion.result.results.map(function (result) {
            return {
                state: 'default',
                text: result.text,
                label: ''
            };
        }));
    };
    QuestionnaireViewModel.prototype.nextQuestion = function () {
        this._questionnaire.next();
        var currentQuestion = this._questionnaire.currentQuestion;
        this._ui.render(currentQuestion.title, currentQuestion.result.results.map(function (result) {
            return {
                state: 'default',
                text: result.text,
                label: ''
            };
        }));
    };
    QuestionnaireViewModel.prototype.selectAnswer = function (answerIndex) {
        this._questionnaire.selectAnswer(answerIndex);
        var currentQuestion = this._questionnaire.currentQuestion;
        this._ui.highlightAnswer(currentQuestion.result.results.map(function (result, index) {
            return {
                state: answerIndex === index ? 'highlighted' : 'default',
                text: result.text,
                label: ''
            };
        }));
    };
    QuestionnaireViewModel.prototype.confirmAnswer = function () {
        this._questionnaire.confirmAnswer();
        var currentQuestion = this._questionnaire.currentQuestion;
        var correctlyAnsweredCount = this._questionnaire.allQuestions
            .filter(function (question) { return question.result.answeredCorrectly; })
            .length;
        var answers = currentQuestion.result.results.map(function (result, index) {
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
        this._ui.confirmAnswer(answers);
        this._ui.updateCorrectAnsweredCount(correctlyAnsweredCount);
    };
    return QuestionnaireViewModel;
}());
export { QuestionnaireViewModel };
