import { useState } from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function CreateEngQuestion () {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [stage, setStage] = useState(null);
    const [level, setLevel] = useState(null);
    const [flag, setFlag] = useState(null);
    const [type, setType] = useState(null);
    const [content, setContent] = useState(null);
    const [contentUrl, setContentUrl] = useState(null);
    const [choice1, setChoice1] = useState(null);
    const [choice2, setChoice2] = useState(null);
    const [choice3, setChoice3] = useState(null);
    const [choice4, setChoice4] = useState(null);
    const [score, setScore] = useState(null);
    const [answer, setAnswer] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        var axios = require('axios');
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/english-question',
            headers: {'Content-Type': 'application/json'},
            data : {
                'stage': stage,
                'level': level,
                'flag': flag,
                'type': type,
                'content': content,
                'content_url': contentUrl,
                'choice_1': choice1,
                'choice_2': choice2,
                'choice_3': choice3,
                'choice_4': choice4,
                'score': score,
                'answer': answer
            }
        };
        axios(config)
        .then(function (response) {
            console.log(response.data.data);
            setLoading(false);
            setError(null);
            navigate('/admin/english-question');
        })
        .catch(function (err) {
            setError(err.message);
            setLoading(false);
            console.log(err.message);
        });
    }

    return (
        <Card className='question-create-box mb-3'>
            <Card.Header>
                <h3>پنل وارد کردن سوالات انگلیسی</h3>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row className='mb-3'>
                        <Col>
                        <Form.Select onChange={(e) => setStage(e.target.value)}>
                            <option>گروه سوال</option>
                            <option value="easy">ساده</option>
                            <option value="medium">متوسط</option>
                            <option value="hard">سخت</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select onChange={(e) => setLevel(e.target.value)}>
                            <option>سطح سوال</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                        </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select onChange={(e) => setFlag(e.target.value)}>
                            <option>نوع سوال</option>
                            <option value="0">تشریحی</option>
                            <option value="1">جای خالی</option>
                            <option value="2">تستی</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>نمره</Form.Label>
                                <Form.Control type="text" placeholder="" onChange={(e) => setScore(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>پاسخ</Form.Label>
                                <Form.Control type="text" placeholder="" onChange={(e) => setAnswer(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>متن سوال</Form.Label>
                            <Form.Control as="textarea" rows={2} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>فایل سوال</Form.Label>
                                <Form.Select onChange={(e) => setType(e.target.value)}>
                                    <option>نوع فایل</option>
                                    <option value="text">image</option>
                                    <option value="video">video</option>
                                    <option value="audio">audio</option>
                                </Form.Select>
                                <Form.Control type="file" placeholder="" onChange={(e) => setContentUrl(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" >
                                <Form.Label>گزینه اول</Form.Label>
                                <Form.Control type="text" placeholder="" onChange={(e) => setChoice1(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>گزینه دوم</Form.Label>
                                <Form.Control type="text" placeholder="" onChange={(e) => setChoice2(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>گزینه سوم</Form.Label>
                                <Form.Control type="text" placeholder="" onChange={(e) => setChoice3(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>گزینه چهارم</Form.Label>
                                <Form.Control type="text" placeholder="" onChange={(e) => setChoice4(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type='submit' className='btn btn-secondary'>
                                {loading && <div className="spinner-border"></div>}
                                ثبت و ذخیره
                            </Button>
                            {error && <div>{error}</div>}
                        </Col>
                    </Row>
                </Form> 
            </Card.Body>
        </Card>
    );
}

export default CreateEngQuestion;