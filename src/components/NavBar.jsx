import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { UserContext } from "../context/UserContext";

export default function NavBar() {
  const { handleLogin, loginInfo, setLoginInfo, currentUser } =
    useContext(UserContext);
  const handleClose = () => setShow(false);
  const handleShow = (bool) => {
    setIsSignUp(bool);
    setShow(true);
  };
  const navigate = useNavigate();

  const [show, setShow] = useState(isLoggedIn);

  return (
    <div>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand as={Link} to="/">
            Lights Out
          </Navbar.Brand>
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/SearchPage">
              <SearchIcon />
              <div>Search</div>
            </Nav.Link>

            <>
              <div className="d-flex align-items-center  flex-column">
                <div>
                  {!isLoggedIn ? (
                    <Button
                      className="ml-2"
                      variant="dark"
                      onClick={() => handleShow(false)}
                    >
                      <LoginIcon className="pe-2 " />
                      login
                    </Button>
                  ) : (
                    <Button
                      className="ml-2"
                      variant="dark"
                      onClick={() => handleSignOut()}
                    >
                      <LogoutIcon className="pe-2 " />
                      Signout
                    </Button>
                  )}
                </div>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {isSignUp ? "Signup to find you're fury friend" : "Login"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={isSignUp ? handleSignUp : handleLogin}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        required
                        name="email"
                        value={userDetailes.email}
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                      />

                      <Form.Label>{isSignUp ? "Full name" : ""}</Form.Label>
                      {isSignUp ? (
                        <Form.Control
                          required
                          name="fullName"
                          value={userDetailes.fullName}
                          type="text"
                          placeholder="Full name"
                          onChange={handleChange}
                        />
                      ) : (
                        ""
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        name="password"
                        value={userDetailes.password}
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <Form.Label>
                        {" "}
                        {isSignUp ? "Repeat Password" : ""}
                      </Form.Label>
                      {isSignUp ? (
                        <Form.Control
                          required
                          name="repassWord"
                          value={userDetailes.repassWord}
                          type="password"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                      ) : (
                        ""
                      )}
                      <Form.Label>{isSignUp ? "Phone number" : ""}</Form.Label>
                      {isSignUp ? (
                        <Form.Control
                          required
                          name="phoneNumber"
                          value={userDetailes.phoneNumber}
                          type="number"
                          placeholder="Phone number"
                          onChange={handleChange}
                        />
                      ) : (
                        ""
                      )}
                      <Form.Text className="text-muted">
                        {isSignUp
                          ? "We'll never share your information with anyone else."
                          : ""}
                      </Form.Text>
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                      {" "}
                      {isSignUp ? (
                        <Button
                          className="me-2 justify-content-between"
                          variant="dark"
                          type="submit"
                          disabled={
                            userDetailes.email === "" ||
                            userDetailes.password === "" ||
                            userDetailes.fullName === "" ||
                            userDetailes.repassWord === "" ||
                            userDetailes.phoneNumber === ""
                          }
                        >
                          Sign up
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="me-2 justify-content-between"
                          variant="dark"
                          disabled={
                            userDetailes.email === "" ||
                            userDetailes.password === ""
                          }
                        >
                          Login
                        </Button>
                      )}
                      <Link
                        className="font-monospace text-decoration-underline"
                        variant="primary"
                        onClick={() => handleShow(!isSignUp)}
                      >
                        {isSignUp
                          ? "Already signed up?"
                          : "Not a member? Click here to sign up!"}
                      </Link>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
