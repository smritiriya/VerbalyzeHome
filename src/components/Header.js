import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { logo } from "../assets";
import Scroll from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";



function Header() {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // This is just a placeholder
    console.log("Sign up", email, password);
    setEmail("");
    setPassword("");
    setName("");
    setShowSignUp(false);
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // This is just a placeholder
    console.log("Sign in", email, password);
    setEmail("");
    setPassword("");
    setName("");
    setShowSignIn(false);
  };

  const openSignInModal = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };
const openSignUpModal = () => {
  setShowSignUp(true);
  setShowSignIn(false);
};

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-0" id="Navbar">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="" style={{ width: "200px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="" style={{ width: "200px" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className="headlink hover-underline-animation">
                    Home
                  </Nav.Link>

                  <Nav.Link
                    href="#myfeature"
                    className="headlink hover-underline-animation"
                  >
                    Services{" "}
                  </Nav.Link>
                  <Nav.Link
                    href="#demo"
                    className="headlink hover-underline-animation"
                  >
                    Demo{" "}
                  </Nav.Link>
                  <Nav.Link
                    href="#myfaq"
                    className="headlink hover-underline-animation"
                  >
                    FAQ{" "}
                  </Nav.Link>
                  <Nav.Link
                    href="#myteam"
                    className="headlink hover-underline-animation"
                    id=""
                  >
                    Our Team
                  </Nav.Link>
                </Nav>
                {/* ------------------------- SIGNUP / SIGNIN---------------------------------------------------- */}
                <Form className="d-flex">
                  <Button
                    onClick={() => setShowSignUp(true)}
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "rgb(2, 2, 186)",
                      color: "white",
                      padding: "10px",
                      border: "none",
                    }}
                  >
                    Sign Up
                  </Button>

                  <Modal
                    show={showSignUp}
                    onHide={() => setShowSignUp(false)}
                    centered
                    className="p-5 "
                  >
                    <Modal.Header
                      closeButton
                      className="d-flex justify-content-end text-center"
                    >
                      <h3 className="d-flex text-center py-2">Sign Up</h3>
                    </Modal.Header>
                    <Modal.Body className="p-3 ">
                      <Form>
                        <Form.Group controlId="text" className="p-2" style={{}}>
                          {/* <Form.Label>Email address</Form.Label> */}
                          <Form.Control
                            type="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="email" className="p-2">
                          {/* <Form.Label>Email address</Form.Label> */}
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="password" className="p-2">
                          {/* <Form.Label>Password</Form.Label> */}
                          <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-end py-4">
                      <Button
                        onClick={openSignInModal}
                        style={{
                          width: "10rem",
                          borderRadius: "50px",
                          backgroundColor: "white",
                          color: "rgb(2, 2, 186)",
                          padding: "10px",
                          border: "1px solid rgb(2, 2, 186)",
                        }}
                      >
                        Sign In
                      </Button>
                      {/* <Button
                        variant="secondary"
                        onClick={() => setShowSignUp(false)}
                      >
                        Close
                      </Button> */}
                      <Button
                        onClick={handleSignUp}
                        style={{
                          width: "10rem",
                          borderRadius: "50px",
                          backgroundColor: "rgb(2, 2, 186)",
                          color: "white",
                          padding: "10px",
                          border: "none",
                        }}
                      >
                        Sign Up
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal
                    show={showSignIn}
                    onHide={() => setShowSignIn(false)}
                    centered
                  >
                    <Modal.Header
                      closeButton
                      className="d-flex justify-content-end text-center"
                    >
                      <h3 className="d-flex text-center py-2">Sign in</h3>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group controlId="emailSignIn" className="py-2">
                          {/* <Form.Label>Email address</Form.Label> */}
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="passwordSignIn" className="py-2">
                          {/* <Form.Label>Password</Form.Label> */}
                          <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={openSignUpModal}
                        style={{
                          width: "10rem",
                          borderRadius: "50px",
                          backgroundColor: "white",
                          color: "rgb(2, 2, 186)",
                          padding: "10px",
                          border: "1px solid rgb(2, 2, 186)",
                        }}
                      >
                        Sign Up
                      </Button>
                      {/* <Button
                        variant="secondary"
                        onClick={() => setShowSignIn(false)}
                      >
                        Close
                      </Button> */}
                      <Button
                        variant="primary"
                        onClick={handleSignIn}
                        style={{
                          width: "10rem",
                          borderRadius: "50px",
                          backgroundColor: "rgb(2, 2, 186)",
                          color: "white",
                          padding: "10px",
                          border: "none",
                        }}
                      >
                        Sign In
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  {/* <Nav.Link
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "rgb(2, 2, 186)",
                      color: "white",
                      padding: "10px",
                    }}
                    href="#contact"
                  >
                    Contact Us
                  </Nav.Link> */}

                  {/* <Button
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
