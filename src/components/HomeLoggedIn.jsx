import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function HomeLoggedIn() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="user-welcome-page">
      <div>
        <h1>Welcome {currentUser.userName}</h1><br/>

        <h2>Last Score: {currentUser.lastScore} </h2>
        <h2>Best Score: {currentUser.highestScore} </h2>
      <div>
        <Button onClick={() => navigate("/game")}>PLAY</Button>
      </div>
      </div>
    </div>
  );
}

export default HomeLoggedIn;
