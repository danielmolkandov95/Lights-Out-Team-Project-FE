import LogIn from "./components/Login";
import HomePage from "./HomePage";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <LogIn />
        <HomePage />
      </UserContextProvider>
    </div>
  );
}

export default App;
