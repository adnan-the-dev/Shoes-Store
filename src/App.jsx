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
import { AddToCartPage } from "./components/addToCartPage/AddToCartPage";
import { CheckOutPage } from "./components/checkOutPage/CheckOutPage";
import { PendingOrderPage } from "./components/pendingOrderPage/PendingOrderPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {

  
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/adminLog" element={<AdminPenal/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products/:code" element={<CategoryDetails/>}/>
        <Route path="/cart/:id" element={<AddToCartPage/>}/>
        <Route path="/cart" element={<CheckOutPage/>}/>
        <Route path="/pendingOrders" element={<PendingOrderPage/>}/>
      </Routes>
    </>
  );
}

export default App;
