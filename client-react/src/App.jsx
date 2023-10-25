import { Link } from "react-router-dom";
import AppRouter from "./router";

function App() {
  return (
    <div className="container">
      <Link to="/users">Trang users</Link>
      <Link to="/login">Trang login</Link>
      <AppRouter />
    </div>
  );
}

export default App;
