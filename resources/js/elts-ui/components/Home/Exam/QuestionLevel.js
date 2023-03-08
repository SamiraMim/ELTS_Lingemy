import { useEffect, useState  } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function QuestionLevel () {

    const [level, setLevel] = useState(null);
    const [examCode, setExamCode] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state != null) {
            setExamCode(location.state.exam_code);
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
                'exam_code' : examCode,
                'english_level' : level 
            }
        };
        axios(config)
        .then(function (response) {
            navigate('/english-questions',{ state: {'exam_code':examCode} })
        })
        .catch(function (error) {
            setError('Error');
        });
    }
    return (
        <Container className="text-center p-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3 className="m-2">Enter Your English Level from 1 to 5:</h3>
                            <input className="m-2" type="text" name="level" id="level" onChange={(e) => setLevel(e.target.value)} />
                            <br/>
                            <Button className="btn-secondary m-1" onClick={sendLevel}>Send</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );

}
export default QuestionLevel;