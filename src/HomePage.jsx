import React from "react";
import HomeNotLoggedIn from "./components/HomeNotLoggedIn";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import HomeLoggedIn from "./components/HomeLoggedIn";

function HomePage() {
  const { currentUser } = useContext(UserContext);

  const isLoggedIn = true;

  return (
    <>
      {!isLoggedIn && <HomeNotLoggedIn />}

      {isLoggedIn && <HomeLoggedIn />}
    </>
  );
}

export default HomePage;
