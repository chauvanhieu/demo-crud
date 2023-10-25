import { Routes, Route } from "react-router-dom";
import UsersPage from "./../pages/users.page";
import UserDetail from "./../pages/usersDetail.page";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/create" element={<UserDetail />} />
        <Route path="/:id" element={<UserDetail />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default UserRouter;
