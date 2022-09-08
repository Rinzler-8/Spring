import React from "react";
import "./../css/Navbar.css";
import ShowProfile from "./ShowProfile";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__left">
        {/* <span>CHEPHIM</span> */}
        <img src={require("../Assets/Banner/logo.png")} alt="navbar__logo" />
      </div>
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

        <div className="navbar__menu">
          <i className="navbarMenu_icon fa-solid fa-bars"></i>
          <span className="">Menu</span>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__profile">
          <ShowProfile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
