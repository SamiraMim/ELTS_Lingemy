import { Routes, Route } from "react-router-dom";
import ExamDetail from "./ExamDetail";
import UserList from "./UserList";

function MentorRouter () {
    return (
        <Routes>
            <Route path="/" element = {<UserList />} />
            <Route path="/:code" element = {<ExamDetail />} /> 
        </Routes>
    );
}

export default MentorRouter;