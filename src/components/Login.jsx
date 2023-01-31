import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

function LogIn() {
  const { handleLogIn, loginInfo, setLoginInfo } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value });
  };
  console.log(loginInfo);

  //   const { email, password } = loginInfo;

  return (
    <div>
      <Nav.Link variant="primary" onClick={handleShow}>
        Login
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogIn}>
            <FloatingLabel
              onChange={handleChange}
              controlId="email"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              onChange={handleChange}
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LogIn;
