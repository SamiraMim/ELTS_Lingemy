import AnswerSheet from "./AnswerSheet";
import Question from "./Question";
import './QuestionBox.css';

function QuestionBox() {
    return (
        <div className="container">
            <Question type='text' />
            <Question type='audio' />
            <AnswerSheet type='choice' />
        </div>
    );
}
export default QuestionBox;