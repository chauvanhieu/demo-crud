const { Task } = require("../models/index");

const TaskService = {
    getAll: async (user_id) => {
        const tasks = await Task.findAll({ where: { user_id } });
        return tasks ? tasks : [];
    },
    getById: async (id) => {
        const task = await Task.findByPk(id);
        return task;
    },
    create: async (taskData, user_id) => {
        const newTask = await Task.create({ ...taskData, user_id });
        return newTask;
    },
    update: async (id, updatedTask) => {
        const [updatedRowCount] = await Task.update(updatedTask, {
            where: { id },
        });

        if (updatedRowCount === 1) {
            const updatedTaskInstance = await Task.findByPk(id);
            return updatedTaskInstance;
        } else {
            return null;
        }
    },
    delete: async (id) => {
        const task = await Task.findByPk(id)
        if (!task) {
            throw new Error("Task not found")
        }
        await task.destroy()
    },
};

module.exports = TaskService;
