import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import UserService from "./../services/user.service";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

function UsersPage() {
  const [data, setData] = useState(null);

  const [params, setParams] = useState({
    page: 1,
    limit: 5,
  });

  const initData = async () => {
    const users = await UserService.getAll(params);
    if (users) {
      setData(users);
    }
  };

  useEffect(() => {
    initData();
  }, [params.page]);

  const handleChange = (event, value) => {
    setParams({ ...params, page: value });
  };

  return (
    <div className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>full name</th>
            <th>username</th>
            <th>password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.users &&
            data.users.rows &&
            data.users.rows.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>
                    <Link to={`/users/${item.id}`}>
                      <button className="btn btn-success">Detail</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {data && data.users && data.users.rows && data.users.rows && (
        <Pagination
          count={data.totalPages}
          page={params.page}
          onChange={handleChange}
        />
      )}
      <Link to={"/users/create"}>
        <button className="btn btn-success mt-2">Tạo mới</button>
      </Link>
    </div>
  );
}

export default UsersPage;
