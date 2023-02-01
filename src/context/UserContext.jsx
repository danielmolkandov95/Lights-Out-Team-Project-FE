import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
   const [loginInfo, setLoginInfo] = useState();
   const navigate = useNavigate();
   const [currentUser, setCurrentUser] = useState(null);
   const [signUpInfo, setSignUpInfo] = useState({});

   const [token, setToken] = useState(
      JSON.stringify(localStorage.getItem("token")) || null
   );

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      user && setCurrentUser(user);
   }, []);
   //THIS CREATES A TOKEN IF THERE IS ALREADY A TOKEN, WHY?
   // useEffect(() => {
   //   if (token) {
   //     localStorage.setItem("token", JSON.stringify(token));
   //   }
   // }, [token]);

   const headersConfig = {
      authorization: `Bearer ${token}`,
   };

   const handleSignUp = async () => {
      try{
         const res = await axios.post(
            `http://localhost:3001/user/signup`,
            signUpInfo
         );
      }
      catch(err){
         console.log('error:', err);
      }
   };

   const handleLogIn = async (event) => {
      event.preventDefault();
      try {
         const data = await axios.post(
            "http://localhost:3001/users/login",
            loginInfo, {withCredentials: true}
         );
         console.log("data", data.data);
         if (data) {
            //  data = currentUser;
            //  setLoginInfo({
            //     email: "",
            //     password: "",
            //  });
            //  console.log(data);
            setCurrentUser(data.data);
            // setToken(data);
            // setLoading(false);
            localStorage.setItem("currentUser", JSON.stringify(data.data));
            toast.success("Log in successful.");
            // window.location.reload();
            if (typeof window !== "undefined") {
               //  localStorage.setItem("token", JSON.stringify(data.data.token));
            }
         }
      } catch (err) {
         alert(err);
      }
   };

   const updateInBE = async (click) => {
      const clickUpdate = await axios.post(
         `http://localhost:3001/click`,
         click
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
            setSignUpInfo,
            signUpInfo,
            handleSignUp,
         }}
      >
         {children}
      </UserContext.Provider>
   );
}
