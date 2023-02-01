import React from "react";
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
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Nav.Link variant="primary" onClick={handleShow}>
        Sign Up
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Label
              onChange={handleChange}
              controlId="user-name"
              label="user-name"
              className="mb-3"
            >
              <Form.Control
                name="userName"
                type="string"
                placeholder="Enter User Name"
              />
            </Form.Label>
            <Form.Label
              onChange={handleChange}
              controlId="email"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter Email Address..."
              />
            </Form.Label>
            <Form.Label
              onChange={handleChange}
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter Password..."
              />
            </Form.Label>
            <Form.Label
              onChange={handleChange}
              controlId="passwordRepeat"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                name="passwordRepeat"
                type="password"
                placeholder="Enter Password Again..."
              />
            </Form.Label>
            <Button
              onClick={() => {
                handleSignUp();
                handleClose();
              }}
              variant="dark"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
