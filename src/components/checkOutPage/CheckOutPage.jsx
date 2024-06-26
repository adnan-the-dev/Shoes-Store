import React, { useEffect } from "react";
import {
  CartHeadingBox,
  CartImage,
  CartItem,
  CartTextBox,
  CheckoutBtn,
  ChildCartitem,
  Heading,
  MainCartItemBox,
  MainDeleteBox,
  MainShoppingCartBox,
  MainSummaryBox,
  SecondBox,
  SecondCartItem,
  SubTotalBox,
  SummaryChildBox,
  SummaryDescription,
  TagBox,
  Text,
} from "./styled-component";
import runShoes from "../../assets/runShoes.webp";
import { Box, Button, TextField, Typography } from "@mui/material";
// import { RiDeleteBinLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { category } from "../arrayComponent/Array";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/slices/cartSlice";
import { placeOrderApi } from "../../api/orders/orders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import showError from "../errorPage/ErrorPage";

export const CheckOutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = localStorage.getItem("Users");
  const user = JSON.parse(userData);
  const store = useSelector((state) => state.cart.cart);
  let totalAmount = 0;
  for (let i = 0; i < store.length; i++) {
    const qut = store[i].quantity;
    const price = store[i].price;
    totalAmount += price * qut;
  }

  const cartItems = store.map((item) => ({
    itemId: item?.productId,
    quantity: item?.quantity,
    size: item?.size,
    itemPrice: item?.price,
    itemImage: item?.img[0],
    itemName: item?.name,
  }));

  const placeOrderFunc = async () => {
    const placeOrder = {
      userName: user.username,
      userId: user._id,
      subTotal: totalAmount,
      items: cartItems,
    };
    const res = await placeOrderApi(placeOrder);
    if (res.status == 200) {
      toast.success("Order Placed");
      navigate("/home");
    } else {
      // toast.error("unable to place order");
      showError("500");
    }
  };

  const order = () => {
    if (store.length === 0) {
      // toast.error("Please Add Product");
      showError("storeLength");
    } else {
      placeOrderFunc();
      dispatch(resetCart());
    }
  };

  const deleteItemFun = (i) => {
    dispatch(removeItem(i));
    toast.success("deletItem");
  };
  return (
    <>
      <MainShoppingCartBox>
        <CartHeadingBox>
          <Heading>Shopping Cart</Heading>
        </CartHeadingBox>
        <MainCartItemBox>
          <ChildCartitem>
            <CartItem>Cart Items</CartItem>
            {store.map((item, i) => {
              return (
                <SecondCartItem key={i}>
                  <CartImage component="img" src={item?.img[0]} alt="" />
                  <CartTextBox>
                    <TagBox>
                      <Text>{item?.name}</Text>
                      <Text isActive={true}>
                        Total: {item?.price * item?.quantity} Rs
                      </Text>
                    </TagBox>
                    <MainDeleteBox>
                      <Box>
                        <Text isActive={true}>{item?.mindetail}</Text>
                        <SecondBox>
                          <Text isActive={true}>Size: {item?.size}</Text>
                          <Text
                            style={{
                              color: "#939590",
                              fontWeight: "normal",
                              fontSize: "smaller",
                            }}
                            isLeft={true}
                          >
                            <Typography>Quantity:{item?.quantity}</Typography>
                            <Typography style={{ color: "black" }}>
                              Price:{item?.price}
                            </Typography>
                          </Text>
                        </SecondBox>
                      </Box>
                      <Box onClick={() => deleteItemFun(i)}>
                        <MdDelete
                          size={25}
                          style={{ marginTop: "1rem", cursor: "pointer" }}
                        />
                      </Box>
                    </MainDeleteBox>
                  </CartTextBox>
                </SecondCartItem>
              );
            })}
          </ChildCartitem>
          <MainSummaryBox>
            <Typography style={{ fontWeight: "600" }}>Summary</Typography>
            <SummaryChildBox>
              <SubTotalBox>
                <Typography>SUBTOTAL</Typography>
                <Typography>Rs {totalAmount.toFixed(2)}</Typography>
              </SubTotalBox>
              <SummaryDescription>
                The SubTotal reflects the total price of Your order. Included
                dues and taxes. before any application discounts. It does not
                include delivery cost and international transection fee
              </SummaryDescription>
            </SummaryChildBox>
            <Box>
              <CheckoutBtn onClick={() => order()}>Checkout</CheckoutBtn>
            </Box>
          </MainSummaryBox>
        </MainCartItemBox>
      </MainShoppingCartBox>
    </>
  );
};
