import React from "react";
import { Navbar, NavItem, NavLink, Nav, NavbarBrand } from "reactstrap";
import { IconButton } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function NavReactstrap() {
  return (
    <div
      style={{
        lineHeight: 1,
      }}
    >
      <Navbar light color="light" expand="xl" fixed="top">
        <Nav className="" navbar>
          <NavItem>
            <NavLink href="/admin">Account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/product">Product</NavLink>
          </NavItem>
        </Nav>

        <NavbarBrand className="mx-auto" href="/home" style={{ fontFamily: "Gill Sans", fontSize: "40px" }}>
          GENUINE {"&"} DIGNITY
        </NavbarBrand>

        <Nav className="" navbar>
          <NavItem>
            <NavLink href={"/login"}>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"/register"}>Register</NavLink>
          </NavItem>
          <IconButton aria-label="Add to Cart">
            <ShoppingBagIcon />
          </IconButton>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavReactstrap;
