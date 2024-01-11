import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/loginPage/Login";
import { Navbar } from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Navbar />

      {/* <Login/>
   
      {/* <Main /> */}
    </>
  );
}

export default App;
