/** @format */

import { Link } from "react-router-dom";
import AppRouter from "./router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Link to="/users">Trang users</Link> <Link to="/login">Trang login</Link>
      <AppRouter />
    </div>
  );
}

export default App;
