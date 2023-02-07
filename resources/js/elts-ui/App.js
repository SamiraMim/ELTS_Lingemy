import {browserHistory, BrowserRouter, Routes, Route } from "react-router-dom";
import HeadNav from "./components/HeadNav";
import Home from "./components/Home";
import Question from "./components/quiz/Question";

function App() {
    return (
        <BrowserRouter basename="">
            <HeadNav />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/quiz/:token" element = {<Home />} />
                <Route path="/questions" element = {<Question type="text" />} />
            </Routes>
        </BrowserRouter>
    );
}

  export default App;