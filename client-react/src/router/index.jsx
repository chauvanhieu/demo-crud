/** @format */

import { Routes, Route } from "react-router-dom";
import UserRouter from "./users.router";
import LoginPage from "./../pages/login.page";
import HomePage from "../pages/home.page";
import AuthProvider from "./../component/AuthProvider/AuthProvider";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users/*" element={<UserRouter />} />
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
