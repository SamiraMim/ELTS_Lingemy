import { useState } from "react";
import { useEffect } from "react";
import { Card, Table, Button, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

function ExamList () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [examList, setExamList] = useState (null);
    const [links, setLinks] = useState(null);
    const [count, setCount] = useState(1);

    useEffect (() => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: `http://127.0.0.1:8000/api/admin/exam/?page=${count}`,
        }

        axios(config)
        .then(function (response) {
            setExamList(response.data.data.data);
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
            <Card.Header>
                <h5 className= "m-2">لیست آزمون ها</h5>
            </Card.Header>
            <Card.Body>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                <Table bordered className="text-center">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>user id</th>
                            <th>access token</th>
                            <th>exam-code</th>
                            <th>status</th>
                            <th>option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examList && examList.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.user_id}</td>
                                <td>{item.access_token}</td>
                                <td>{item.exam_code}</td>
                                <td>{item.status}</td>
                                <td><Link to={`/admin/exam/${item.exam_code}`} className="btn btn-dark">show</Link></td>
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

export default ExamList;