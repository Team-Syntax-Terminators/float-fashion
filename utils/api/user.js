import api from "../axios";
import { errorHandler } from "../errorHandler";

// save user in DB
export const saveUser = async (data) => {
  try {
    const res = await api.post("/users", data);
    return res;
  } catch (error) {
    const { message } = errorHandler(error);
    console.log("message:", message);
  }
};
