import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Mina S.r.l</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#browse">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}

export default MyNav;