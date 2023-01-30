import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <NavBar />
        <HomePage />
      </UserContextProvider>
    </div>
  );
}

export default App;
