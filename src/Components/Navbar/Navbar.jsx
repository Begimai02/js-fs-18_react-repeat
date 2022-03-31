import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <div
            style={{
              width: "700px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Navbar.Brand>
              {" "}
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                {" "}
                React-Bootstrap
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              style={{ display: "inline-block" }}
              id="basic-navbar-nav"
            >
              <Nav
                className="me-auto"
                style={{
                  width: "600px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                  to="/add"
                >
                  Add
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to="/list"
                >
                  List
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
