import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home () {
    return(
        <Container>
           <h1>Home</h1>
           <Row>
                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ullam eum ipsa exercitationem rem molestiae neque et doloribus optio, quod possimus provident porro debitis esse, facilis hic? Vero, quam expedita.</p>
                    <Link  to="/questions" className='btn btn-info py-2 px-4'>Start Quiz</Link>
                </Col>
           </Row>
        </Container>
    );
}
export default Home;