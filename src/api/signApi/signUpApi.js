import { handleApi } from "../hendleApi";
import urls from "./urls";

export const postRegisterApi = async (data) => {
    const body = data
    const response = await handleApi(`${urls.register}`, "POST", body);
    return response;
};


export const postLoginApi = async (data) => {
    const body = data
    const response = await handleApi(`${urls.login}`, "POST", body);
    return response;
};