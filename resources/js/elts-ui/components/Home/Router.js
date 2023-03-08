import { Routes, Route } from "react-router-dom";
import HomeIndex from "./Index";
import QuestionBox from "./Exam/QuestionBox";
import StartPage from "./Exam/StartPage";
import QuestionLevel from "./Exam/QuestionLevel";
import EnglishQuestionBox from "./Exam/EnglishQuestionBox";
import EndPage from "./Exam/EndPage";

function HomeRouter () {
    return (
        <Routes>
            <Route path="/" element = {<HomeIndex />} />
            <Route path="/exam" element = {<StartPage />} />
            <Route path="/exam/:token" element = {<StartPage />} />
            <Route path="/questions" element = {<QuestionBox type="text" />} />
            <Route path="/question-level" element = {<QuestionLevel />} />
            <Route path="/english-questions" element = {<EnglishQuestionBox type="text" />} />
            <Route path="/exam-end" element = {<EndPage />} />
        </Routes>
    );
}
export default HomeRouter;