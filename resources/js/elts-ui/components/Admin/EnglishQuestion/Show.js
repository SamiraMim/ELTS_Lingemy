import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import DeleteEngQuestion from "./Delete";


function ShowEngQuestion () {

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [question, setQuestion] = useState(null);

    useEffect(()=> {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: `http://127.0.0.1:8000/api/admin/english-question/${id}`,
        }

        axios(config)
        .then(function (response) {
            setQuestion(response.data.data);
            setLoading(false);
            setError(null);
        })
        .catch(function (err) {
            setError(err.message);
            setLoading(false);
            console.log(err.message);
        });

    }, []);
    
    return (
        <>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {question && <Card className=" show-question-field mb-3">
                            <Card.Header>
                                <h1>نمایش سوال</h1>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <p>
                                            <span>سطح سوال: </span>
                                            {question.level}
                                        </p>
                                    </Col>
                                    <Col>
                                        <p>
                                            <span>گروه سوال: </span>
                                            {question.stage}   
                                        </p>
                                    </Col>
                                    <Col>
                                        <p>
                                            <span>نوع سوال: </span>
                                            {question.type}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            <span>نمره: </span>
                                            {question.score}
                                        </p>
                                    </Col>
                                    <Col>
                                        <p>
                                            <span>پاسخ: </span>
                                            {question.answer}
                                        </p>
                                    </Col>
                                    <Col>
                                        <p>
                                            <span>فایل : </span>
                                            {question.content_url}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span>متن سوال : </span>
                                        <p className="p-3">
                                            {question.content}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <p>
                                        <span>گزینه 1 : </span>
                                        {question.choice_1}
                                    </p>
                                    </Col>
                                    <Col>
                                    <p>
                                        <span>گزینه 2 : </span>
                                        {question.choice_2}
                                    </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <p>
                                        <span>گزینه 3 : </span>
                                        {question.choice_3}
                                    </p>
                                    </Col>
                                    <Col>
                                    <p>
                                        <span>گزینه 4 : </span>
                                        {question.choice_4}
                                    </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/admin/english-question/edit/${id}`} className='btn btn-secondary m-2'>ویرایش</Link>
                                <DeleteEngQuestion questionId={question.id} />
                            </Card.Footer>
                        </Card>
            }
        </>
    );
}

export default ShowEngQuestion;