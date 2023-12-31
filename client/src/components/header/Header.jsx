import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header({ isAuthenticated }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">The Theatre</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/plays">Plays</Nav.Link>
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/add">Add</Nav.Link>
                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;