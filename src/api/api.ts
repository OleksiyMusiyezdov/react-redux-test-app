import axios from "axios";
import { ICredentials } from "../redux/interfaces";
import { IApiResponse, IGetNewsResponse } from "./api.interface";

export const getNewsApi = async (): Promise<IApiResponse<IGetNewsResponse>> => {
  const { data } = await axios.get(
    "https://63134b14a8d3f673ffc80bc1.mockapi.io/news"
  );
  return data;
};

/* FAKE CALL FOR AUTHORIZATION */
export const authApi = async (
  credentials: ICredentials
): Promise<IApiResponse<ICredentials>> => {
  if (credentials.username === "user" && credentials.password === "user") {
    return {
      success: true,
      code: 200,
      data: {
        username: credentials.username,
        password: credentials.password,
      },
    };
  } else {
    return {
      success: false,
      code: 401,
      error: "Username or password is incorrect",
    };
  }
};
