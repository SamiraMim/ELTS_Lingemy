import { Routes, Route } from "react-router-dom";
import AdminIndex from "./Index";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element = {<AdminIndex />} />
            
        </Routes>
    );
}
export default AdminRouter;