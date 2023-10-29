/** @format */

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthProvider({ children }) {
  const { isAuthentication } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentication) {
      navigate("/login");
    }
  }, [isAuthentication, navigate]);

  return { children };
}

export default AuthProvider;
