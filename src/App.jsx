import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/loginPage/Login";
import { Navbar } from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { ToastContainer } from "react-toastify";
import { SignUp } from "./components/signUpPage/SignUp";
import AdminPenal from "./components/adminPanal/AdminPenal";
import Home from "./components/homePage/Home";
import CategoryDetails from "./components/categoryDetailsPage/CategoryDetails";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <CategoryDetails/>
      {/* <Home/> */}
      {/* <AdminPenal /> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
