import { useCallback } from 'react';
import { useEffect, useState} from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';   

function EnglishQuestion(props) {
    const [question, setQuestion] = useState({content: '', choice_1: '', choice_2: '', choice_3: '', choice_4: ''});
    const location = useLocation();
    const [count, setCount] = useState(1); 
    const [answer, setAnswer] = useState({id: '', value: ''});
    const [quizCode, setQuizCode] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state != null) {
            setQuizCode(location.state.quiz_code);
            // ---------- get Current unanswered Question ----------
            var quiz_code = location.state.quiz_code;
            var axios = require('axios');
            // var data = JSON.stringify(answers);
            var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/api/current-english-question',
                headers: {'Content-Type': 'application/json'},
                data : {'quiz_code' : quiz_code }
            };
            axios(config)
            .then(function (response) {
                if (response.data.message == 'question') {
                    setQuestion(response.data.data);
                } else {
                    navigate('/finish-quiz');
                }
            })
            .catch(function (error) {
                setError('Error');
            });
        } 
        else {
            navigate('/level',{ state: {'quiz_code':quizCode} });
            // set a reference to dom question box and display: none;
            // show a dom that says Exam is finished!
        }
    }, []);


    const goNext = () => {
        var axios = require('axios');
        // var data = JSON.stringify(answers);
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/english-question',
            headers: {'Content-Type': 'application/json'},
            data : {
                'quiz_code': quizCode,
                'answer': answer
            }
        };
        axios(config)
        .then(function (response) {
            if (response.data.message == 'question') {
                setQuestion(response.data.data);
                setCount(count + 1);
            } else {
                navigate('/finish-quiz');
            }
        })
        .catch(function (error) {
            setError('Error');
        });
    }

    if (props.type === 'text') {

        return (
            <Container>
                <h1 className='m-2'>English Quiz</h1>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <ul>
                                    <li key={question.id} className="mt-3">
                                        <p key={question.id}>{question.id}{"-"}{question.content}</p>
                                        <input type="radio" name={question.id} id="" value="ch1" onChange={(e) => setAnswer({ id : e.target.name, value : e.target.value })} />{" "}{question.choice_1}<br/>
                                        <input type="radio" name={question.id} id="" value="ch2" onChange={(e) => setAnswer({ id : e.target.name, value : e.target.value })} />{" "}{question.choice_2}<br/>
                                        <input type="radio" name={question.id} id="" value="ch3" onChange={(e) => setAnswer({ id : e.target.name, value : e.target.value })} />{" "}{question.choice_3}<br/>
                                        <input type="radio" name={question.id} id="" value="ch4" onChange={(e) => setAnswer({ id : e.target.name, value : e.target.value })} />{" "}{question.choice_4}
                                    </li>
                                </ul>   
                            </Card.Body>
                            <Row className='p-2 justify-content-left'>
                                <Col md = {2}>
                                    <Button style={{ width: '100%' }} className="btn-secondary m-1" onClick={goNext}>Next</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    } else if (props.type === 'image') {
        return (
            <div className="row justify-content-center">
                <div className="col">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid?</p>
                    <h1>{props.type}</h1>
                </div>
            </div>
        );

    } else if (props.type === 'video') {
        return (
            <div className="row justify-content-center">
                <div className="col">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid?</p>
                    <h1>{props.type}</h1>
                </div>
            </div>
        );

    } else if (props.type === 'audio') {
        return (
            <div className="row justify-content-center">
                <div className="col">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid?</p>
                    <h1>{props.type}</h1>
                </div>
            </div>
        );
    }
}
export default EnglishQuestion;