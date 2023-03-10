import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function HomeLoggedIn() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.log('user', currentUser.userName);
  return (
    <div className="user-welcome-page">
      <div>
        <h1 >Welcome {currentUser?.userName}</h1><br/>
      <div>
        <Button className="button-game" onClick={() => navigate("/game")}>Start a new game</Button>
      </div>
      </div>
    </div>
  );
}

export default HomeLoggedIn;
