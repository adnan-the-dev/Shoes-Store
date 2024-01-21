import { handleApi } from "../hendleApi";
import urls from "./urls";

export const placeOrderApi = async (data) => {
  const body = data;
  const response = await handleApi(`${urls.order}`, "POST", body);
  return response;
};

export const getAllOrders = async () => {
  const response = await handleApi(`${urls.order}`, "GET");
  return response;
};

export const chagneStatusOrder = async (id) => {
  const response = await handleApi(`${urls.order}/${id}/complete`, "PUT");
  return response;
};


export const completeOrders = async () => {
  const response = await handleApi(`${urls.order}/complete`, "GET");
  return response;
};