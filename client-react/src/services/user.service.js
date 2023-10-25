import AxiosService from "./axios.service";

const UserService = {
  getAll: async ({ page, limit, keyword }) => {
    const params = new URLSearchParams({
      page: page || 1,
      limit: limit || 10,
      keyword: keyword || "",
    });
    const data = await AxiosService.get({
      url: "users",
      params,
    });

    return data;
  },
  getById: async (id) => {
    const user = await AxiosService.get({
      url: `users/${id}`,
    });
    return user;
  },
  create: async (data) => {
    const user = await AxiosService.post({
      url: "users",
      data,
    });

    return user;
  },
  update: async (id, data) => {
    const user = await AxiosService.put({
      url: `users/${id}`,
      data,
    });

    return user;
  },
  delete: async (id) => {
    await AxiosService.delete({
      url: `users/${id}`,
    });
  },
};

export default UserService;
