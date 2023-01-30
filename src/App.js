import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div>
      <NavBar>
        <HomePage />
      </NavBar>
    </div>
  );
}

export default App;
