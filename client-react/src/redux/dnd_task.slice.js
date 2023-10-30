/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DnD_TaskService from "../services/dnd_task.service";

export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async () => {
  const response = await DnD_TaskService.getAll();
  return response;
});

export const createNewTask = createAsyncThunk(
  "tasks/createNewTask",
  async (taskData) => {
    const response = await DnD_TaskService.create(taskData);
    return response;
  }
);

export const updateExistingTask = createAsyncThunk(
  "tasks/updateExistingTask",
  async ({ id, taskData }) => {
    const response = await DnD_TaskService.update(id, taskData);
    return response;
  }
);

export const deleteExistingTask = createAsyncThunk(
  "tasks/deleteExistingTask",
  async (id) => {
    await DnD_TaskService.delete(id);
    return id;
  }
);

const dnd_taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    });

    builder.addCase(createNewTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
    builder.addCase(updateExistingTask.fulfilled, (state, action) => {
      const updatedTask = action.payload;
      const existingTaskIndex = state.tasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (existingTaskIndex !== -1) {
        state.tasks[existingTaskIndex] = updatedTask;
      }
    });

    builder.addCase(deleteExistingTask.fulfilled, (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    });

    builder.addCase(
      getAllTasks.rejected,
      createNewTask.rejected,
      updateExistingTask.rejected,
      deleteExistingTask.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }
    );
  },
});

export default dnd_taskSlice.reducer;
