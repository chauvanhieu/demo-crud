import AxiosService from "./axios.service";

const AuthService = {
  login: async (username, password) => {
    const data = await AxiosService.post({
      url: "login",
      data: { username, password },
    });

    return data;
  },
};
export default AuthService;
