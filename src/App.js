import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import UserContextProvider from "./context/UserContext";
import Game from "./components/Game"

function App() {
  return (
    <div>
      <UserContextProvider>
      <NavBar>
        <HomePage />
      </NavBar>
      </UserContextProvider>
    </div>
  );
}

export default App;
