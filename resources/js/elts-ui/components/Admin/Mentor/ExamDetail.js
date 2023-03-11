import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card} from 'react-bootstrap';
import ExamSheet from './ExamSheet';


function ExamDetail () {

    const {code} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sheet, setSheet] = useState(null);

    useEffect(()=> {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: `http://127.0.0.1:8000/api/admin/client-user/${code}`,
        }

        axios(config)
        .then(function (response) {
            setSheet(response.data.data);
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
            {sheet && 
            <Card className='question-create-box mb-3'>
                <Card.Header>
                    <h3>پاسخنامه کد آزمون - {code}</h3>
                </Card.Header>
                <Card.Body>
                    <ExamSheet sheet={sheet} code={code} />
                </Card.Body>
            </Card>
        }
        </>
    );
}

export default ExamDetail;