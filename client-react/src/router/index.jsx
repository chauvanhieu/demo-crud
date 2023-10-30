/** @format */

import { Routes, Route } from "react-router-dom";
import UserRouter from "./users.router";
import LoginPage from "./../pages/login.page";
import HomePage from "../pages/home.page";
import AuthProvider from "./../component/AuthProvider/AuthProvider";
import DnD_TodoList from "../pages/d&d_TodoList.page";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users/*" element={<UserRouter />} />
       <Route path="/k1/todo_list" element={<DnD_TodoList />} />
      <Route
        path="/"
        element={
          <AuthProvider>
            <HomePage />
          </AuthProvider>
        }
      />
 

    </Routes>
  );
}

export default AppRouter;
