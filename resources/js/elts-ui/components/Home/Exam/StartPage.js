import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function StartPage () {
    const [examCode, setExamCode] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const sendExamCode = () => {
        var axios = require('axios');
        // var data = JSON.stringify(code);
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/exam',
            headers: {'Content-Type': 'application/json'},
            data : {'exam_code': examCode}
        };
        axios(config)
        .then(function (response) {
            navigate('/questions',{ state:response.data });
        })
        .catch(function (err) {
            setError(err.message);
        });

    }
    return (
        <Container className="text-center p-4">
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                        <h3 className="m-2">Please enter your Exam Code</h3>
                        <label className="m-2" htmlFor="exam-code">Exam Code: </label>{' '}
                        <input className="m-2" type="text" name="exam-code" id="exam-code" onChange={ (e) => setExamCode(e.target.value) } />
                        <br/>
                        <h4 className="m-2" style={{color: 'red'}}>{error}</h4>
                        <Button className='btn btn-info mt-4 px-4 py-2' onClick={sendExamCode}>Start Exam</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default StartPage;