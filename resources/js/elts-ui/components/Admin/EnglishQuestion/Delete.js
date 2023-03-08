import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DeleteEngQuestion ({questionId}) {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        setLoading(true);
        const axios = require('axios');
        const config = {
            method: 'delete',
            url: `http://127.0.0.1:8000/api/admin/english-question/${questionId}`,
        }

        axios(config)
        .then(function (response) {
            setLoading(false);
            setError(null);
            console.log(response.data.data);
            navigate('/admin/english-question');
        })
        .catch(function (err) {
            setLoading(false);
            setError(err.message)
            console.log(err.message);
        });
    }

    return(
        <>
            <Button onClick={handleDelete} className='btn btn-danger m-2'>
                {loading && <div className="spinner-border"></div>}
                حذف
            </Button>
            {error && <div>{error}</div>}
        </>
    );
}

export default DeleteEngQuestion;