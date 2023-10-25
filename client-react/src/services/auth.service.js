/** @format */

import AxiosService from "./axios.service";

const AuthService = {
  login: async (username, password) => {
    const data = await AxiosService.post({
      url: "login",
      data: { username, password },
    });
    localStorage.setItem("access_token", data.access_token);

    return data;
  },
};
export default AuthService;
