import { useState } from "react";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
