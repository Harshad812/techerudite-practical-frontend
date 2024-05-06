import axios from "axios";
import { base_path, ENDPOINTS } from "./api";

export const MainAPI = async (method: string, point: string, data: any) => {
  return await axios({
    url: `${base_path}/${point}`,
    method: method,
    data: data,
  });
};

export const loginUser = async (data: Object) => {
  return await MainAPI("post", ENDPOINTS.LOGIN, data);
};

export const registerUser = async (data: Object) => {
  return await MainAPI("post", ENDPOINTS.REGISTER, data);
};
