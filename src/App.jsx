import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/loginPage/Login";
import { Navbar } from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login/>
   
      <Navbar/> */}
      <Main />
    </>
  );
}

export default App;
