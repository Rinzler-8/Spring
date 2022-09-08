import React from "react";
import { Navbar, NavItem, NavLink, Nav, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./../css/Navbar.css";
function NavReactstrap() {
  return (
    <div
      style={{
        lineHeight: 1,
      }}
    >
      <Navbar light color="red" expand="sm" fixed="top" className="navbar">
        <Nav className="" navbar>
          <NavLink className="navbar__left" href={"/home"}>
            <img src={require("../Assets/Banner/logo.png")} alt="navbar__logo" />
          </NavLink>
        </Nav>

        <NavItem>
          <div className="navbar__center">
            <div className="navbar__searchAndFilter">
              <div className="navbar__filter">
                <select>
                  <option>Tất cả</option>
                  <option>Tất cả</option>
                  {/* <option>Tất cả Tất cả Tất cả</option> */}
                  <option>Tất cả</option>
                  <option>Tất cả</option>
                  <option>Tất cả</option>
                  <option>Tất cả</option>
                </select>
              </div>

              <div className="navbar__search">
                <input type="text" placeholder="Tìm kiếm ..." className="" />
                <i className="navbar__searchIcon fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </NavItem>

        <Nav className="navbar__menu" navbar>
          <NavItem>
            <i className="navbarMenu_icon fa-solid fa-bars"></i>

            <NavLink href={"/login"}>Menu</NavLink>
          </NavItem>
          <NavItem>
            <i className="fa-solid fa-user"></i>
            <NavLink href={"/login"} style={{ fontWeight: "200px" }}>
              Đăng nhập
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavReactstrap;
