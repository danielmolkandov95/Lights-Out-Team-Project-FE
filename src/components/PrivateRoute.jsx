import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function PrivateRoute({ children }) {
  const { currentUser } = useContext(UserContext);

  return <div>{currentUser?.userName ? <div>{children}</div> : <Navigate to={"/"} />}</div>;
}

export default PrivateRoute;