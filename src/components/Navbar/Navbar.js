import { Navbar, Nav, Container, Col } from "react-bootstrap";

import Search from "../Search";
import { useAuth } from "../../contexts/Auth";

const CharactersNav = ({ children }) => {
  const { logout } = useAuth();

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
          <Col md={4} className=" d-flex">
            {<Search />}
          </Col>

          <Col md={2}>
            {localStorage.getItem("auth") ? (
              <>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
              </>
            )}
          </Col>
        </Container>
      </Navbar>
    </>
  );

  // if (isLoggedIn === true) {
  //   return (
  //     <>
  //       <Navbar className="nav__styles">
  //         <Container fluid>
  //           <Col md={4}>
  //             <Nav>
  //               <Navbar.Brand href="/">Rick and Morty </Navbar.Brand>
  //               <Nav.Link href="/">Home</Nav.Link>
  //               <Nav.Link href="/characters">Characters</Nav.Link>
  //             </Nav>
  //           </Col>
  //           <Col md={4} className=" d-flex">
  //             {<Search />}
  //           </Col>

  //           <Col md={2}>
  //             <Button onSubmit={logout}>salir</Button>
  //           </Col>
  //         </Container>
  //       </Navbar>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Navbar className="nav__styles">
  //         <Container fluid>
  //           <Col md={4}>
  //             <Nav>
  //               <Navbar.Brand href="/">Rick and Morty </Navbar.Brand>
  //               <Nav.Link href="/">Home</Nav.Link>
  //               <Nav.Link href="/characters">Characters</Nav.Link>
  //             </Nav>
  //           </Col>
  //           <Col md={4} className=" d-flex">
  //             {<Search />}
  //           </Col>

  //           <Col md={2}>
  //             <Nav>
  //               <Nav.Link href="/login">Login</Nav.Link>
  //             </Nav>
  //           </Col>
  //         </Container>
  //       </Navbar>
  //     </>
  //   );
  // }
};

export default CharactersNav;
