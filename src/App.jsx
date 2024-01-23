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
import { CompleteOrders } from "./components/completeOrders/CompleteOrders";
import { Private } from "./components/privatePage/Private";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/adminLog" element={<AdminPenal />} />
        <Route
          path="/home"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route
          path="/products/:code"
          element={
            <Private>
              <CategoryDetails />
            </Private>
          }
        />
        <Route
          path="/cart/:id"
          element={
            <Private>
              <AddToCartPage />
            </Private>
          }
        />
        <Route
          path="/cart"
          element={
            <Private>
              <CheckOutPage />
            </Private>
          }
        />
        <Route
          path="/pendingOrders"
          element={
            <Private>
              <PendingOrderPage />
            </Private>
          }
        />
        <Route
          path="/completeOrders"
          element={
            <Private>
              <CompleteOrders />
            </Private>
          }
        />
      </Routes>
    </>
  );
}
{
  /* <Redirect from="/" to="/login" /> */
}
export default App;
