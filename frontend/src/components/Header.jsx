import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link> {/* Use NavLink for navigation */}
            </Nav.Item>
            {/* Add more Nav links or other content here as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
