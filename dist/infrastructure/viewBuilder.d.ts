import { Choice, QuestionnaireRules, QuestionProps } from "../domain/questionnaire";
import { QuestionnaireView } from "../domain/questionnaire";
export declare function viewBuilder(rules: QuestionnaireRules, props: QuestionProps[], view: QuestionnaireView): {
    view: QuestionnaireView;
    result: () => Choice[];
};
