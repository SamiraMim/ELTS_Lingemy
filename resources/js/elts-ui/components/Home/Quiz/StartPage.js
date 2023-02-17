import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StartPage = () => {
    const [quizCode, setQuizCode] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const sendQuizCode = () => {
        var axios = require('axios');
        // var data = JSON.stringify(code);
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/quiz',
            headers: {'Content-Type': 'application/json'},
            data : {'quiz_code': quizCode}
        };
        axios(config)
        .then(function (response) {
            navigate('/questions',{ state:response.data });
        })
        .catch(function (error) {
            setError('Not Registered');
        });

    }
    return (
        <Container className="text-center p-4">
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                        <h3 className="m-2">Please enter your Quiz Code</h3>
                        <label className="m-2" htmlFor="quiz-code">Quiz Code: </label>{' '}
                        <input className="m-2" type="text" name="quiz-code" id="quiz-code" onChange={ (e) => setQuizCode(e.target.value) } />
                        <br/>
                        <h4 className="m-2" style={{color: 'red'}}>{error}</h4>
                        <Button className='btn btn-info mt-4 px-4 py-2' onClick={sendQuizCode}>Start Quiz</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default StartPage;