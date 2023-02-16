import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function FinishQuiz () {
    return(
        <Container>
            <Row>
                <Col>
                    <Card className="mt-5">
                        <Card.Body>
                            <h1>Your Quiz finished</h1>
                            <Link to="/" className="btn btn-secondary m-1">Return Home</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}
export default FinishQuiz;