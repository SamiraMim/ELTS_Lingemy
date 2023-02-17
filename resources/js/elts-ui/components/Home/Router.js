import { Routes, Route } from "react-router-dom";
import HomeIndex from "./Index";
import QuestionBox from "./Quiz/QuestionBox";
import StartPage from "./Quiz/StartPage";
import QuestionLevel from "./Quiz/QuestionLevel";
import EnglishQuestionBox from "./Quiz/EnglishQuestionBox";
import EndPage from "./Quiz/EndPage";

const HomeRouter = () => {
    return (
        <Routes>
            <Route path="/" element = {<HomeIndex />} />
            <Route path="/quiz" element = {<StartPage />} />
            <Route path="/quiz/:token" element = {<StartPage />} />
            <Route path="/questions" element = {<QuestionBox type="text" />} />
            <Route path="/question-level" element = {<QuestionLevel />} />
            <Route path="/english-questions" element = {<EnglishQuestionBox type="text" />} />
            <Route path="/quiz-end" element = {<EndPage />} />
        </Routes>
    );
}
export default HomeRouter;