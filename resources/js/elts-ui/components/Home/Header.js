import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink} from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>ELTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={(navData) => navData.isActive ? "active" : ""}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/quiz" className={(navData) => navData.isActive ? "active" : ""}>Quiz</Nav.Link>
            <Nav.Link as={NavLink} to="/admin" className={(navData) => navData.isActive ? "active" : ""}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;