import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

export default function Header() {
  // const [userLogged, setUserLogged] = useState("");
  // if (sessionStorage.getItem("loggedInUser")) {
  //   setUserLogged(JSON.parse(sessionStorage.getItem("loggedInUser")).username);
  // }

  // useEffect(() => {
  //   if (sessionStorage.getItem("loggedInUser")) {
  //     document.getElementById(
  //       "loggedtext"
  //     ).innerText = `Logged in as:${userLogged}`;
  //   }
  // }, []);

  return (
    <div className="header">
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              width="150px"
              height="110px"
              className="d-inline-block align-top"
              alt="OrigaMe logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/loginPage">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          {/* {sessionStorage.getItem("loggedInUser") && (
            <p>
              Logged in as:{" "}
              {JSON.parse(sessionStorage.getItem("loggedInUser")).username}
            </p>
          )} */}
        </Container>
      </Navbar>
    </div>
  );
}
