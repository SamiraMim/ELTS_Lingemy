import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Home () {
    // const [code, setCode] = useState(0);
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

    return(
        <Container>
           <h1>Home</h1>
           <Row>
                <Col>
                    <h3 className='btn btn-danger'>{error}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ullam eum ipsa exercitationem rem molestiae neque et doloribus optio, quod possimus provident porro debitis esse, facilis hic? Vero, quam expedita.</p>
                    <label htmlFor="quiz-code">Quiz Code: </label>{' '}
                    <input type="text" name="quiz-code" id="quiz-code" onChange={ (e) => setQuizCode(e.target.value) } />
                    <br/>
                    <button className='btn btn-info my-2 py-2 px-4' onClick={sendQuizCode}>Start Quiz</button>
                </Col>
           </Row>
        </Container>
    );
}
export default Home;