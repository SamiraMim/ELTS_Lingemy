import { useState } from "react";
import { useEffect } from "react";
import { Card, Table} from 'react-bootstrap';
import { Link } from "react-router-dom";

function UserList () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userList, setUserList] = useState (null);

    useEffect (() => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/admin/client-user'
        }

        axios(config)
        .then(function (response) {
            setUserList(response.data.data);
            setLoading(false);
            setError(null)
        })
        .catch(function (err) {
            setLoading(false);
            setError(err.message)
            console.log(err.message);
        });

    },[]);


    return (
        <Card className=" mb-3">
            <Card.Header>
                <h5 className= "m-2">لیست شرکت کنندگان </h5>
            </Card.Header>
            <Card.Body>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                <Table bordered className="text-center">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>phone number</th>
                            <th>exam-code</th>
                            <th>status</th>
                            <th>option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList && userList.map(user => (
                            user.access_links.map( item => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.phone_number}</td>
                                    <td>{item.exam_code}</td>
                                    <td>{item.status}</td>
                                    <td><Link to={`/admin/client-user/${item.exam_code}`} className="btn btn-dark">show</Link></td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );

}

export default UserList;