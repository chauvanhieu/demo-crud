const TaskService = require("../services/task.service");

const TaskController = {
  getAll: async (req, res, next) => {
    try {
      const user_id = req.user.id;
      // if (!user_id) {
      //   throw new Error("Bạn cần phả đăng nhập !")
      // }
      const tasks = await TaskService.getAll(user_id);
      return res.json(tasks);
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const user_id = req.user.id;

      const taskData = req.body;
      const newTask = await TaskService.create(taskData, user_id);
      return res.status(201).json(newTask);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ message: "Please enter your task id!" });
      }
      const task = await TaskService.getById(id);
      if (task) {
        return res.json(task);
      } else {
        return res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ message: "Please enter your task id!" });
      }
      const updatedTaskData = req.body;
      const updatedTask = await TaskService.update(id, updatedTaskData);

      return res.status(200).json({ message: "Updated!" });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ message: "Please enter your task id!" });
      }
      await TaskService.delete(id);
      return res.status(204).json({ message: "Deleted!" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = TaskController;
