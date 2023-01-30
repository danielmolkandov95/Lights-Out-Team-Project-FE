
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

function HomeLoggedIn () {

const { currentUser } = useContext(UserContext);
    

    return (

        <div>

            <h1>Welcome {currentUser.userName}</h1>

            <h2> {currentUser.lastScore} </h2>
            <h2> {currentUser.highestScore} </h2>

            <Button>
                PLAY
            </Button>


        </div>
    )
}

export default HomeLoggedIn;