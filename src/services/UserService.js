import { get } from "./RequestService";
import { API_URL } from "@/configs/constants";

export const getUsers = async () => {
  try {
    const url = `${API_URL}/users`;
    const params = {
      url
    };
    const posts = await get(params);

    return posts;
  } catch (error) {
    console.log(error);
  }
};
