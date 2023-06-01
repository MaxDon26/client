import axios from "axios";
import localStorageService from "./localStorage.service";

const endPoint = "https://identitytoolkit.googleapis.com/v1";

const httpAuth = axios.create({
  baseURL: endPoint,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

const authService = {
  login: async (payload) => {
    const { data } = await httpAuth.post(
      `accounts:signInWithPassword`,
      payload
    );

    return data;
  },
  updatePassword: async (payload) => {
    const { data } = await httpAuth.post("accounts:update", payload);
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post("token", {
      grant_type: "refresh_token",
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};
export default authService;
