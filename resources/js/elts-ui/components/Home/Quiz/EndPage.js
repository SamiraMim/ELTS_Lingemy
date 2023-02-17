import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function EndPage () {
    return(
        <Container className="text-center p-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h1 className="m-3">Your Quiz finished</h1>
                            <Link to="/" className="btn btn-secondary m-1">Return Home</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}
export default EndPage;