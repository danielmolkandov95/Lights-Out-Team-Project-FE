import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import UserContextProvider from "./context/UserContext";
import Game from "./components/Game"
import Score from "./components/Score"

function App() {
  return (
    <div>
      <UserContextProvider>
        <NavBar/>
          <HomePage />
    
      </UserContextProvider>
    </div>
  );
}

export default App;
