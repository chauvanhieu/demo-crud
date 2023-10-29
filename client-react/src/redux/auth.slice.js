/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password, navigate }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async ({ navigate }, thunkAPI) => {
    try {
      localStorage.removeItem("access_token");
      navigate("/login");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthentication: false,
    info: null,
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.isAuthentication = true;
      state.info = action.payload;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.error = false;
      state.isAuthentication = false;
      state.info = null;
    });
  },
});

export default authSlice.reducer;
