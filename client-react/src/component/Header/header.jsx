/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth.slice";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthentication = useSelector((state) => state.auth.isAuthentication);
  const info = useSelector((state) => state.auth.info);

  const handleLogout = () => {
    dispatch(logout({ navigate }));
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to={"/"}>
          <h1>DEMO</h1>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={"/users"}>
              Users list
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              {info && info.user && `Hello, ${info.user.username} !!`}
            </Nav.Link>

            {isAuthentication ? (
              <Link className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
