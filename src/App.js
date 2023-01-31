import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import UserContextProvider from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import PrivateRoute from "./components/PrivateRoute";
import Score from "./components/Score";

function App() {
  return (
    <div>
      <Score />
       {/* <UserContextProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/game"
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
        </Routes>
          </UserContextProvider> */}
    </div> 
    
  );
}

export default App;
