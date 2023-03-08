import { Routes, Route } from "react-router-dom";
import { Row, Col} from 'react-bootstrap';
import AdminHeader from './Header';
import SideMenu from "./SideMenu"
import Dashboard from "./Dashboard";
import EngQuestionRouter from "./EnglishQuestion/Router";
import ExamRouter from "./ExamCorrection/Router";

function AdminRouter () {
    return (
        <div className='main-wrapper main-wrapper-responsive-lg'>
            <AdminHeader/>
            <SideMenu />
            <main className='main-container container-fluid'>
                <Row className='justify-content-center'>
                    <Col xl={11}>
                        <Routes>
                            <Route path="/" element = {<Dashboard />} />
                            <Route path="/english-question/*" element = {<EngQuestionRouter />} />
                            <Route path="/exam/*" element = {<ExamRouter />} />

                            {/* <Route path="/create-question" element = {<CreateQuestion />} /> */}
                        </Routes>
                    </Col>
                </Row>
            </main>
        </div>
        
    );
}
export default AdminRouter;