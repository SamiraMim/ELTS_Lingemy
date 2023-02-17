
import { Container, Row, Col, Button } from 'react-bootstrap';

import Header from './Header';

function HomeIndex () {
    return(
        <>
            <Header/>
            <Container className='text-center p-4'>
                <h1 className='m-2'>Welcome to English Level Test System</h1>
                <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ullam eum ipsa exercitationem rem molestiae neque et doloribus optio, quod possimus provident porro debitis esse, facilis hic? Vero, quam expedita.</p>
            </Container>
        </>
    );
}
export default HomeIndex;