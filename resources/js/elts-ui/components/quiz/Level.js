import { useEffect, useState  } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';



function Level () {

    const [level, setLevel] = useState(null);
    const [quizCode, setQuizCode] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state != null) {
            setQuizCode(location.state.quiz_code);
        }
    });

    const sendLevel = () => {
        var axios = require('axios');
        // var data = JSON.stringify(answers);
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/english-level',
            headers: {'Content-Type': 'application/json'},
            data : {
                'quiz_code' : quizCode,
                'english_level' : level 
            }
        };
        axios(config)
        .then(function (response) {
            navigate('/english-questions',{ state: {'quiz_code':quizCode} })
        })
        .catch(function (error) {
            setError('Error');
        });
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="mt-5">
                        <Card.Body>
                            <h5>Enter Your English Level from 1 to 5:</h5>
                            <input type="text" name="level" id="level" onChange={(e) => setLevel(e.target.value)} />
                            <br/>
                            <Button className="btn-secondary m-1" onClick={sendLevel}>Send</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );

}
export default Level;