import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";
import Badge from "../Badge/Badge";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navActive = ({ isActive }) => (isActive ? "selected" : "");

  return (
    <header>
      <div className="container">
        <div className="row__header">
          <div className="header__nav">
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <NavLink className={navActive} to={"/"} end>
                  Home
                </NavLink>
                <NavLink className={navActive} to={"/new"}>
                  New
                </NavLink>
                <NavLink className={navActive} to={"/contact"}>
                  Contact
                </NavLink>
                <NavLink className={navActive} to={"/blog"}>
                  Blog
                </NavLink>
                <Badge handleToggle={handleToggle} />
                <Cart toggle={toggle} handleToggle={handleToggle} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Header = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#albums">Link</Nav.Link>
//             <Nav.Link href="#record">Contact</Nav.Link>
//             <Nav.Link href="#finds">Blog</Nav.Link>
//             <Nav.Link href="#footer">Blog</Nav.Link>
//             <div className='cart'> <ShoppingCartIcon/> </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
