import React from "react";
import './Navbar.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.svg";
import Cart from "../Cart/Cart";
import { useState } from "react";
import Badge from "../Badge/Badge";
import { useSelector } from "react-redux";

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const cartLength = useSelector((state) => state.vinylStore.cart.length);
  // const navActive = ({ isActive }) => (isActive ? "selected" : "");

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">New</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Badge handleToggle={handleToggle} badge={cartLength} />
          <Cart toggle={toggle} handleToggle={handleToggle} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
