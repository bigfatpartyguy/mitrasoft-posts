import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

export default function NavBarComponent() {
  return (
    <NavBar collapseOnSelect bg="dark" expand="sm" variant="dark">
      <Container fluid="md">
        <NavBar.Brand>MitraSoft</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}
