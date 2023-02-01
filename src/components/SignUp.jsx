import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

export default function SignUp() {
  const { handleSignUp, signUpInfo, setSignUpInfo } = useContext(UserContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setSignUpInfo({ ...signUpInfo, [e.target.id]: e.target.value });
  };
  // console.log(signUpInfo);

  return (
    <div>
      <Nav.Link variant="primary" onClick={handleShow}>
        Signup
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <FloatingLabel
              onChange={handleChange}
              controlId="email"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <FloatingLabel
              onChange={handleChange}
              controlId="UserName"
              label="User Name"
              className="mb-3"
            >
              <Form.Control type="name" placeholder="User Name" />
            </FloatingLabel>

            <FloatingLabel
              onChange={handleChange}
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="repassword" />
            </FloatingLabel>
            <FloatingLabel
              onChange={handleChange}
              controlId="repassword"
              label="repassword"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="repassword" />
            </FloatingLabel>
            <Button variant="dark" type="submit">
              Sign up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
