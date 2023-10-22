import { Link } from "react-router-dom";
import AppRouter from "./router";

function App() {
  return (
    <>
      <h1>hello world</h1>
      <Link to="/users">Trang users</Link>
      <Link to="/login">Trang login</Link>
      <AppRouter />
    </>
  );
}

export default App;
