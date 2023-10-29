/** @format */
import { useSelector } from "react-redux";
import TaskTable from "./../component/Task/TaskTable";

function HomePage() {
  const isAuthentication = useSelector((state) => state.auth.isAuthentication);
  return <>{isAuthentication && <TaskTable />}</>;
}

export default HomePage;
