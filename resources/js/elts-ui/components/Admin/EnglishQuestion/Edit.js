import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card} from 'react-bootstrap';
import EditForm from './EditForm';

function EditEngQuestion () {
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
            {question && 
            <Card className='question-create-box mb-3'>
                <Card.Header>
                    <h3>ویرایش سوال</h3>
                </Card.Header>
                <Card.Body>
                    <EditForm question={question} />
                </Card.Body>
            </Card>
        }
        </>
    );
}

export default EditEngQuestion;