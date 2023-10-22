import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import UserService from "./../services/user.service";

function UsersPage() {
  const [data, setData] = useState(null);

  const [params, setParams] = useState({
    page: 1,
    limit: 5,
    keyword: "",
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

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>full name</th>
            <th>username</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default UsersPage;
