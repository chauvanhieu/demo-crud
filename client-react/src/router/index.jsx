/** @format */

import { Routes, Route } from "react-router-dom";
import UserRouter from "./users.router";
import LoginPage from "./../pages/login.page";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users/*" element={<UserRouter />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </>
  );
}

export default AppRouter;
