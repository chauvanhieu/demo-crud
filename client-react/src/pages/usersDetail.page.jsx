import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "./../services/user.service";

function UserDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
  });
  const [isEdit, setIsEdit] = useState(!!id);

  useEffect(() => {
    const getUser = async () => {
      const data = await UserService.getById(id);
      if (data) {
        setUser(data);
      }
    };

    if (id) {
      getUser();
    }
  }, [id]);

  const removeUser = async (e) => {
    e.preventDefault();
    await UserService.delete(id);
  };

  async function handleUpdate(e) {
    e.preventDefault();
    await UserService.update(id, user);
    navigate("/users");
  }

  async function handleCreate(e) {
    e.preventDefault();

    await UserService.create(user);
    navigate("/users");
  }

  return (
    <div className="container">
      <h1>{isEdit ? "Edit User" : "Create User"}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        {isEdit ? (
          <>
            <button className="btn btn-success" onClick={handleUpdate}>
              Update
            </button>
            <button onClick={removeUser} className="btn btn-success">
              Remove
            </button>
          </>
        ) : (
          <button className="btn btn-success" onClick={handleCreate}>
            Create
          </button>
        )}
      </form>
    </div>
  );
}

export default UserDetail;
