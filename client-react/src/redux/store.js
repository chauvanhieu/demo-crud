/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import dnd_taskSlice from "./dnd_task.slice";

export default configureStore({
  reducer: {
    auth: authSlice,
    dnd_task: dnd_taskSlice,
  },
});
