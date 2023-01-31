import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState({
    userId: 3,
    userName: "Raphy",
    lastScore: 700,
    highestScore: 925,
  });
  const [signUpInfo, setSignUpInfo] = useState({});

  const [token, setToken] = useState(
    JSON.stringify(localStorage.getItem("token")) || null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  const headersConfig = {
    authorization: `Bearer ${token}`,
  };
  const handleSignUp = async () => {
    
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      // const data = await axios.post("http://localhost:8080/user/login", loginInfo);
      let data = {};
      if (true) {
        data = currentUser;
        setLoginInfo({
          email: "",
          password: "",
        });
        console.log(data);
        setCurrentUser(data);

        setToken(data);
        // setLoading(false);
        toast.success("Log in successfull.");
        window.location.reload();
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(data.data.token));
          localStorage.setItem(
            "currentUser",
            JSON.stringify(data.data.user._id)
          );
        }
      }
    } catch (err) {
      alert(err);
    }
  };

  const updateInBE = async (click) => {
    const clickUpdate = await axios.post(
      `http://localhost:8080/click`, click
    );
    console.log("clickUpdate", clickUpdate);
  };

  return (
    <UserContext.Provider
      value={{
        headersConfig,
        handleLogIn,
        loginInfo,
        setLoginInfo,
        currentUser,
        setCurrentUser,
        token,
        setToken,
        updateInBE,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
