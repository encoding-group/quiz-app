var QuestionnaireViewDto = /** @class */ (function () {
    function QuestionnaireViewDto() {
        this.answers = [];
        this.score = 0;
        this.title = '';
        this.questionnaireStatus = "pending";
        this.userAction = "pending";
    }
    QuestionnaireViewDto.prototype.updateAnswers = function (answers) {
        this.answers = answers;
    };
    QuestionnaireViewDto.prototype.updateScore = function (score) {
        this.score = score;
    };
    QuestionnaireViewDto.prototype.updateTitle = function (title) {
        this.title = title;
    };
    QuestionnaireViewDto.prototype.updateQuestionnaireStatus = function (status) {
        this.questionnaireStatus = status;
    };
    QuestionnaireViewDto.prototype.updateUserAction = function (action) {
        this.userAction = action;
    };
    return QuestionnaireViewDto;
}());
export { QuestionnaireViewDto };
