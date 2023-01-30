import { createContext, useState } from "react";
import axios from "axios";


export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
      });

      const [currentUser, setCurrentUser] = useState({
        userId: "",
        username:"",
      });

      const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("token")) || null
      );
    
      useEffect(() => {
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
        }
      }, [token]);
    
      const headersConfig = {
        authorization: `Bearer ${token}`,
      };

      const handleLogIn = async (event) => {
        event.preventDefault()

        try{
            const data = await axios.post("http://localhost:8080/user/login", loginInfo);

            if (data) {
                setLoginInfo({
                  email: "",
                  password: "",
                });
                console.log(data);
                setCurrentUser(data.data.user);
        
                setToken(data.data.token);
                // setLoading(false);
        
                toast.success("Log in successfull.");
                window.location.reload();
                if (typeof window !== "undefined") {
                  localStorage.setItem("token", JSON.stringify(data.data.token));
                  localStorage.setItem("currentUser", JSON.stringify(data.data.user._id)
                  );
                }
              }
        } catch (err) {
            alert(err)
        }
      }

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
