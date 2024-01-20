import { handleApi } from "../hendleApi";
import urls from "./urls";


export const placeOrderApi = async (data) => {
    const body = data
    const response = await handleApi(`${urls.order}`, "POST" , body);
    return response;
};