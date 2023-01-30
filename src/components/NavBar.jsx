import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogIn from "../components/Login";

import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function NavBar() {
  const { handleLogin, loginInfo, setLoginInfo, currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  console.log(currentUser);

  return (
    <div>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand as={Link} to="/">
            Lights Out
          </Navbar.Brand>
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/Login">
              <LogIn />
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
