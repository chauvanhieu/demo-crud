import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();

  return <>{id}</>;
}

export default UserDetail;
