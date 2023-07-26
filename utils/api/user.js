import api from "../axios";
import { errorHandler } from "../errorHandler";

// create a new user & save into database
export const createUser = async (data) => {
  try {
    const res = await api.post("/users/register", data);
    return res;
  } catch (error) {
    const { message } = errorHandler(error);
    console.log("message:", message);
  }
};

// login user
export const loginUser = async (data) => {
  try {
    const res = await api.post("/users/login", data);
    return res;
  } catch (error) {
    const { message } = errorHandler(error);
    console.log("message:", message);
  }
};
