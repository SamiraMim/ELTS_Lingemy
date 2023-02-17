import { Container, Row, Col, Button } from 'react-bootstrap';
import SideMenu from "./SideMenu"

const AdminIndex = () => {
    return (
        <Container fluid dir="rtl" className="p-0 m-0" style={{height: '100vh'}}>
            <Row>
                <Col xl={3}>
                    <SideMenu />
                </Col>
                <Col>
                    <h1>Admin Page</h1>
                </Col>
            </Row>
        </Container>
    );
}
export default AdminIndex;