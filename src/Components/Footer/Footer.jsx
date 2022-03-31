import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ marginTop: "auto" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
