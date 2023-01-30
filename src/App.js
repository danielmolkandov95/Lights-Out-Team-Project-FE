import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
<<<<<<< HEAD
        <NavBar>
          <HomePage />
        </NavBar>
=======
        <NavBar />
        <HomePage />
>>>>>>> main
      </UserContextProvider>
    </div>
  );
}

export default App;
