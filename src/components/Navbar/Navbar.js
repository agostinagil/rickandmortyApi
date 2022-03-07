import { Navbar, Nav, Container, Col } from "react-bootstrap";
import Search from "../Search";

const CharactersNav = ({ children }) => {
  return (
    <>
      <Navbar className="nav__styles">
        <Container fluid>
          <Col md={4}>
            <Nav>
              <Navbar.Brand href="/">Rick and Morty </Navbar.Brand>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/characters">Characters</Nav.Link>
            </Nav>
          </Col>
          <Col md={8} className="nav__search">
            {<Search />}
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default CharactersNav;
