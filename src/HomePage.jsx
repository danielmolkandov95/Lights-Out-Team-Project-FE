import React from "react";
import HomeNotLoggedIn from "./components/HomeNotLoggedIn";
import { UserContext } from "../src/context/UserContext";
import { useContext, useState } from "react";
import HomeLoggedIn from "./components/HomeLoggedIn";

function HomePage() {
  const { currentUser } = useContext(UserContext);

  const isLoggedIn = currentUser.userId;
  console.log("isLoggedin",isLoggedIn)

  return (
    <>
      {isLoggedIn ?  <HomeLoggedIn /> : <HomeNotLoggedIn />  }
    </>
  );
}

export default HomePage;
