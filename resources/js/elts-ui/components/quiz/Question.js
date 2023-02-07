import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Question(props) {

    const [questions, setQuestions] = useState(null);
    const [id, setId] = useState(1);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/questions/' + id)
        .then(res => res.json())
        .then(data => setQuestions(data))    
    }, []);
        
    const goNext = () => {
        if (id < 10 ) {
            setId(id + 1);
        } else {
            id = 10
        }
        // id = id + 1;
        fetch('http://127.0.0.1:8000/api/questions/' + id)
        .then(res => res.json())
        .then(data => setQuestions(data))
    }
    const goPrev = () => {
        if (id > 0) {
            setId(id - 1);
        } else {
            id = 1
        }
        // id = id - 1;
        fetch('http://127.0.0.1:8000/api/questions/' + id)
        .then(res => res.json())
        .then(data => setQuestions(data))
    }

    let answers = {};
    const answerSheet = (e) => {
        var key = 'Q-' + e.target.name;
        answers[key] = e.target.value;
        var axios = require('axios');
        var data = JSON.stringify(answers);
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/questions',
            headers: {'Content-Type': 'application/json'},
            data : data
        };
        axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    if (props.type === 'text') {

        return (
            <Container>
                <h1 className='m-2'>Quiz</h1>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <ul>
                                { questions && questions.map( question => (
                                    <li key={question.id} className="mt-3">
                                        <p key={question.id}>{question.id}{"-"}{question.content}</p>
                                        <input type="radio" name={question.id} id="" value="ch1" onChange={(e) => answerSheet(e)}/>{" "}{question.choice_1}<br/>
                                        <input type="radio" name={question.id} id="" value="ch2" onChange={(e) => answerSheet(e)}/>{" "}{question.choice_2}<br/>
                                        <input type="radio" name={question.id} id="" value="ch3" onChange={(e) => answerSheet(e)}/>{" "}{question.choice_3}<br/>
                                        <input type="radio" name={question.id} id="" value="ch4" onChange={(e) => answerSheet(e)}/>{" "}{question.choice_4}
                                    </li>
                                )) }
                                </ul>   
                            </Card.Body>
                            <Row className='p-2 justify-content-left'>
                                <Col md = {2}>
                                    <Button style={{ width: '100%' }} className='btn-secondary m-1' onClick={goPrev}>Prev</Button>
                                </Col>
                                <Col md = {2}>
                                    <Button style={{ width: '100%' }} className='btn-secondary m-1' onClick={goNext}>Next</Button>
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
export default Question;