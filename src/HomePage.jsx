import React from "react";
import HomeNotLoggedIn from "./components/HomeNotLoggedIn";
import { UserContext } from "../src/context/UserContext";
import { useContext } from "react";
import HomeLoggedIn from "./components/HomeLoggedIn";
import { ClassNames } from "@emotion/react";
import { useEffect } from "react";

function HomePage() {
  const { currentUser } = useContext(UserContext);

    useEffect(() => {
       !currentUser && localStorage.getItem("currentUser");
    });
  
  return (
     <div className="pt-5">
        {currentUser ? <HomeLoggedIn /> : <HomeNotLoggedIn />}
     </div>
  );
}

export default HomePage;
