
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

function HomeLoggedIn () {

const { currentUser } = useContext(UserContext);
    

    return (

        <div>

            <h1>Welcome {currentUser.userName}</h1>

        </div>
    )
}

export default HomeLoggedIn;