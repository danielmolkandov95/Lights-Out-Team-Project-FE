import React from "react";
import HomeNotLoggedIn from "./components/HomeNotLoggedIn";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

function HomePage() {

  const { currentUser } = useContext(UserContext);

  const isLoggedIn = true;

  return (
    <>

    {!isLoggedIn &&(
      <HomeNotLoggedIn />

    )}


    </>
  );
}

export default HomePage;


