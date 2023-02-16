import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeadNav from "./components/HeadNav";
import Home from "./components/Home";
import Question from "./components/quiz/Question";
import Level from "./components/quiz/Level";
import EnglishQuestion from "./components/quiz/EnglishQuestion";
import FinishQuiz from "./components/quiz/FinishQuiz";





function App() {
    return (
        <BrowserRouter basename="api">
            <HeadNav />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/quiz/:token" element = {<Home />} />
                <Route path="/questions" element = {<Question type="text" />} />
                <Route path="/level" element = {<Level />} />
                <Route path="/english-questions" element = {<EnglishQuestion type="text" />} />

                <Route path="/finish-quiz" element = {<FinishQuiz />} />

            </Routes>
        </BrowserRouter>
    );
}

  export default App;