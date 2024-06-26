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
import { PatientDetailsForm } from "./components/clinicForm/PatientDetailsForm";
import Loader from "./components/loaderPage/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        setLoading(true)
        // Do something before request is sent
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => {
        setLoading(false)
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }, []);
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Loader show={loading} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<PatientDetailsForm />} /> */}

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
