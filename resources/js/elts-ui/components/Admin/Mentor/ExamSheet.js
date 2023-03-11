import { useState } from "react";
import {Table, Form, Row, Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function ExamSheet ({sheet, code}) {

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let grades = [];

    const userGrades = (e) => {        
        let item = grades.find(item => item.question_id === e.target.name);
        if (item) {
            grades = grades.filter(item => item.question_id !== e.target.name);
            grades.push({exam_code:code, question_id: e.target.name, value:e.target.value});
        } else {
            grades.push({exam_code:code, question_id: e.target.name, value:e.target.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        var axios = require('axios');
        var config = {
            method: 'put',
            url: `http://127.0.0.1:8000/api/admin/client-user/${code}`,
            headers: {'Content-Type': 'application/json'},
            data : grades
        };
        axios(config)
        .then(function (response) {
            console.log(response.data.data);
            setLoading(false);
            setError(null);
            navigate('/admin/client-user');

        })
        .catch(function (err) {
            setError(err.message);
            setLoading(false);
            console.log(err.message);
        });
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Table bordered className="text-center">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>question</th>
                        <th>User Answer</th>
                        <th>Correct Answer</th>
                        <th>Score</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {sheet && sheet.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.question}</td>
                            <td>{item.user_answer}</td>
                            <td>{item.answer}</td>
                            <td>{item.score}</td>
                            <td>
                                <Form.Group>
                                    <Form.Control type="text" defaultValue={item.grade} name={item.question_id} onChange={(e)=>userGrades(e)} required />
                                </Form.Group>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="text-center">
                <Col>
                    <Button type='submit' className='btn btn-secondary'>
                        {loading && <div className="spinner-border"></div>}
                        ثبت و ذخیره
                    </Button>
                    {error && <div>{error}</div>}
                </Col>
            </Row>
        </Form>
    );

}
export default ExamSheet;