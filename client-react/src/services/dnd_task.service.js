/** @format */

import AxiosService from "./axios.service";

const DnD_TaskService = {
  getAll: async () => {
    const data = await AxiosService.get({
      url: "tasks",
    });

    return data;
  },
  getById: async (id) => {
    const task = await AxiosService.get({
      url: `tasks/${id}`,
    });
    return task;
  },
  create: async (data) => {
    const task = await AxiosService.post({
      url: "tasks",
      data,
    });

    return task;
  },
  update: async (id, data) => {
    const task = await AxiosService.put({
      url: `tasks/${id}`,
      data,
    });

    return task;
  },
  delete: async (id) => {
    await AxiosService.delete({
      url: `tasks/${id}`,
    });
  },
};

export default DnD_TaskService;
