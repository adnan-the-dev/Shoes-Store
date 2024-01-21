import { Autocomplete, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LogoBox, LogutBox, MainBox } from "../sharedFile/styled-component";
import { Link } from "react-router-dom";
import { getProductData } from "../../api/signApi/signUpApi";
import { NavLink } from "react-router-dom/dist";
import { category } from "../arrayComponent/Array";

export const Navbar = () => {
//   const getuser = localStorage.getItem("Users");
//   const user = getuser.username
// console.log(user,'kshdf');

  const [prodcuts, setProdcuts] = useState([]);
  const getDataApi = async () => {
    const res = await getProductData();
    setProdcuts(res.data.result);
  };
  useEffect(() => {
    getDataApi();
  }, []);


  const arr = prodcuts.map((item) => ({ cat: item.catagory, id: item.images }));
  const unique = [...new Set(arr.map((item) => item.cat))];

  return (
    <>
      <MainBox>
        <LogoBox>
          <NavLink to="/home">
            <img style={{ width: "70px" }} src={logo} alt="" />
          </NavLink>
          <NavLink
            to="/completeOrders"
            style={{ textDecoration: "none", color: "#191919" }}
          >
            <Typography>Complete Order</Typography>
          </NavLink>
          <NavLink
            to="/pendingOrders"
            style={{ textDecoration: "none", color: "#191919" }}
          >
            <Typography>Pending Order</Typography>
          </NavLink>
          <Box>
            <select
              style={{
                padding: "8px",
                outline: "none",
                fontSize: "1rem",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <option label="Select brand"></option>
              {unique.map((item, i) => {
                // const productId = arr?.find((ob) => ob.id == item)
                return (
                  // <NavLink>
                  <option key={i} value="">
                    {item}
                  </option>
                  // </NavLink>
                );
              })}
            </select>
          </Box>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "#191919" }}
          >
            <Typography style={{ fontWeight: "600" }}>Log in</Typography>
          </NavLink>
          <NavLink
            to="/adminLog"
            style={{ textDecoration: "none", color: "#191919" }}
          >
            <Typography style={{ fontWeight: "600" }}>Admin panel</Typography>
          </NavLink>
        </LogoBox>
        <LogutBox>
          <Typography>Log out</Typography>
          <AiOutlineUser />
          <NavLink to="/cart" style={{ color: "black" }}>
            <RiShoppingBag2Line />
          </NavLink>
        </LogutBox>
      </MainBox>
    </>
  );
};
