import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";

const Header = () => {
  const history = useHistory();
  let user = JSON.parse(localStorage.getItem("user_info"));
  // console.log("user", user)
  const logout = () => {
    localStorage.clear();
    history.push("./login");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_l ">
            {localStorage.getItem("user_info") ? (
              <></>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
        <Nav>
          {localStorage.getItem("user_info") ? (
            <>
              <NavDropdown
                id="dropdown-basic-button"
                title={user && user.username}
                className="me-5"
              >
                <NavDropdown.Item href="#/action-1" onClick={logout}>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard">
                  dashboard
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>null</>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
