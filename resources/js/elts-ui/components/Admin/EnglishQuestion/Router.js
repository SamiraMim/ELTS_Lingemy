import { Routes, Route } from "react-router-dom";
import IndexEngQuestion from "./Index";
import ShowEngQuestion from "./Show";
import CreateEngQuestion from "./Create";
import EditEngQuestion from "./Edit";
import DeleteEngQuestion from "./Delete";

function EngQuestionRouter () {
    return (
        <Routes>
            <Route path="/" element = {<IndexEngQuestion />} />
            <Route path="/:id" element = {<ShowEngQuestion />} />
            <Route path="/create" element = {<CreateEngQuestion />} />
            <Route path="/edit/:id" element = {<EditEngQuestion />} />
            <Route path="/delete/:id" element = {<DeleteEngQuestion />} />
        </Routes>
    );

}

export default EngQuestionRouter;