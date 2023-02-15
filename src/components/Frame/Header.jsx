import React from 'react';
import { NavLink ,Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../img/모카.png"
import "./Header.scss";

const Header = () => {

  const navlink = [
    {
      name: "주류검색",
      path: "/search",
    },
    {
      name: "칵테일레시피",
      path: "/recipe",
    },
    {
      name: "제작",
      path: "/making",
    },
    {
      name: "정보",
      path: "/info",
    },
  ];

  return (
    <div className='header-div'>
      <Navbar bg="white" variant="white">
        <Container>
          <Nav className="me-auto navbar">
            <Link to="/" className='logo'>
              <img src={logo} alt="" style={{width:"100px"}}/>
            </Link>
            {
              navlink.map(
                (nav,i) => (
                  <NavLink to={nav.path}
                  className="nav-link" 
                  key={i}>
                    {nav.name.split("").map((a, i) => (
                      <span data-hover={a} key={i}>
                        {a}
                      </span>
                    ))}
                  </NavLink>
                )
              )
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;