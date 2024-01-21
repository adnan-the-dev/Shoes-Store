import React, { useEffect, useState } from "react";
import {
  CartImage,
  CartTextBox,
  MainBox,
  MainDeleteBox,
  PendinBoxBtn,
  SecondBox,
  SecondCartItem,
  TagBox,
  Text,
} from "./styled-component";
import { Box } from "@mui/material";
import { chagneStatusOrder, getAllOrders } from "../../api/orders/orders";
import { toast } from "react-toastify";

export const PendingOrderPage = () => {
  const [data, setData] = useState([]);
  const allOrdersApi = async () => {
    const res = await getAllOrders();
    setData(res.data.result);
  };

  const statusChange = async (id) => {
    const res = await chagneStatusOrder(id);
    allOrdersApi();
    toast.success("Order Complete");
  };

  useEffect(() => {
    allOrdersApi();
  }, []);

  return (
    <>
      <MainBox>
        {data.map((order) => {
          return order.items.map((item) => (
            <SecondCartItem>
              <CartImage component="img" src={item.itemImage} alt="" />
              <CartTextBox>
                <TagBox>
                  <Text>{item.itemName}</Text>
                  <Text isActive={true}>Price : {item.itemPrice} Rs</Text>
                </TagBox>
                <MainDeleteBox>
                  <Box>
                    <SecondBox>
                      <Text isActive={true}>Size: {item.size}</Text>
                      <Text
                        style={{
                          color: "rgb(86 90 81)",
                          fontWeight: "normal",
                          fontSize: "1rem",
                        }}
                        isLeft={true}
                      >
                        Quantity:{item.quantity}
                      </Text>
                    </SecondBox>
                  </Box>
                  <Box>
                    {order.status == "complete" ? (
                      <PendinBoxBtn
                        status={true}
                        onClick={async () => statusChange(order._id)}
                      >
                        {order.status}
                      </PendinBoxBtn>
                    ) : (
                      <PendinBoxBtn
                        onClick={async () => statusChange(order._id)}
                      >
                        {order.status}
                      </PendinBoxBtn>
                    )}
                  </Box>
                </MainDeleteBox>
              </CartTextBox>
            </SecondCartItem>
          ));
        })}
      </MainBox>
    </>
  );
};
