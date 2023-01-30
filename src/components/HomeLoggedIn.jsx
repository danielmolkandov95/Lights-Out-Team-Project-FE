
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

function HomeLoggedIn () {

const { currentUser } = useContext(UserContext);
    

    return (

        <div className="user-welcome-page">

            <h1>Welcome {currentUser.userName}</h1>

            <h2>Last Score: {currentUser.lastScore} </h2>
            <h2>Best Score: {currentUser.highestScore} </h2>

            <Button>
                PLAY
            </Button>


        </div>
    )
}

export default HomeLoggedIn;