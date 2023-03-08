import { Routes, Route } from "react-router-dom";
import ExamDetail from "./Detail";
import ExamList from "./List";

function ExamRouter () {
    return (
        <Routes>
            <Route path="/" element = {<ExamList />} />
            <Route path="/:code" element = {<ExamDetail />} /> 
        </Routes>
    );
}

export default ExamRouter;