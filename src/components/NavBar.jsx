import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogIn from "../components/Login";
import { UserContext } from "../context/UserContext";
import "./NavBar.css";
import SignUp from "./SignUp";
import { useEffect } from "react";

export default function NavBar() {
     const navigate = useNavigate();
   const { currentUser } = useContext(UserContext);

   useEffect(()=>{

   },[currentUser])

   return (
      <div>
         <Navbar
            className="justify-content-between nav-bar"
            bg="dark"
            variant="dark"
         >
            <div className="container">
               <Navbar.Brand className="title" as={Link} to="/">
                  Lights Out !
               </Navbar.Brand>
               <Nav className="align-items-center w-100 d-flex justify-content-center gap-5">
                  {currentUser && (
                     <Nav.Link as={Link} to="/game">
                        Game
                     </Nav.Link>
                  )}
                  {currentUser && (
                     <Nav.Link as={Link} to="/score">
                        Scores
                     </Nav.Link>
                  )}
                  {!currentUser && (
                     <Nav.Link as={Link} to="/">
                        <LogIn />
                     </Nav.Link>
                  )}
                  {!currentUser && (
                     <Nav.Link as={Link} to="/">
                        <SignUp />
                     </Nav.Link>
                  )}
                  {currentUser && (
                     <Nav.Link
                        as={Link}
                        to="/"
                        onClick={() => {
                           localStorage.clear();
                           navigate("/");
                           window.location.reload();
                        }}
                     >
                        Logout
                     </Nav.Link>
                  )}
               </Nav>
            </div>
         </Navbar>
      </div>
   );
}
