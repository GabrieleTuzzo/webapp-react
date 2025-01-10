import { Navbar, Nav, Container } from 'react-bootstrap';

export default function CustomNavbar() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Boolvies</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
