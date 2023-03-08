import { useState } from "react";
import { useEffect } from "react";
import { Card, Table, Button, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";


function IndexEngQuestion () {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [questions, setQuestions] = useState (null);
    const [links, setLinks] = useState(null);
    const [count, setCount] = useState(1);
    const [linkLabel, setLinkLabel] = useState(null);

    useEffect (() => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: `http://127.0.0.1:8000/api/admin/english-question/?page=${count}`,
        }

        axios(config)
        .then(function (response) {
            setQuestions(response.data.data.data);
            setLinks(response.data.data.links);
            setLoading(false);
            setError(null)
        })
        .catch(function (err) {
            setLoading(false);
            setError(err.message)
            console.log(err.message);
        });

    },[count]);


    const handlePageLink = (link) => {
        if(link == "&laquo; Previous") {
            if(count > 1) {
                setCount(parseInt(count) - 1)
            } else {
                setCount(1)
            }
        } else if (link === "Next &raquo;") {
            if(count < 14) {
                setCount(parseInt(count) + 1)
            } else {
                setCount(14)
            }
        } else {
            setCount(link)
        }
    }

    return (
        <Card className=" mb-3">
            <Card.Body>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                <Link to="/admin/english-question/create" className="btn btn-dark m-2">Create Question</Link>
                <Table bordered className="text-center">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>content</th>
                            <th>level</th>
                            <th>stage</th>
                            <th>score</th>
                            <th>answer</th>
                            <th>option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions && questions.map(question => (
                            <tr key={question.id}>
                                <td>{question.id}</td>
                                <td>{question.content}</td>
                                <td>{question.level}</td>
                                <td>{question.stage}</td>
                                <td>{question.score}</td>
                                <td>{question.answer}</td>
                                <td><Link to={`/admin/english-question/${question.id}`} className="btn btn-dark">show</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Row className='text-center'>
                    <Col>
                        {links && links.map(link => (
                            <Button className={link.active ? "btn btn-sm btn-dark mx-1" : "btn btn-sm btn-secondary mx-1"} onClick={()=>handlePageLink(link.label)} key={link.label}>
                                {link.label == "&laquo; Previous" ? "Previous" : (link.label == "Next &raquo;" ? "Next" : link.label)}
                            </Button>                        
                        ))}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default IndexEngQuestion;