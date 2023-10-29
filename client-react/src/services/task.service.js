import AxiosService from "../services/axios.service";
const TaskService = {
  getAll: async () => {
    const tasks = await AxiosService.get({
      url: "tasks",
    });

    return tasks;
  },
  getById: async (id) => {
    const task = await AxiosService.get({
      url: `tasks/${id}`,
    });

    return task;
  },
  create: async (data) => {
    const newTask = await AxiosService.post({
      url: "tasks",
      data,
    });

    return newTask;
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
export default TaskService;
