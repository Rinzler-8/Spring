import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavReactstrap from "../Nav/NavReactstrap";

function AdminAuth() {
  let role = localStorage.getItem("role");
  return role === "ADMIN" && localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
}
function WithAuth() {
  let tokend = localStorage.getItem("token");
  return tokend ? <Outlet /> : <Navigate to="/login" />;
}

function WithNav() {
  return (
    <>
      <NavReactstrap />
      <Outlet />
    </>
  );
}

function WithoutNav() {
  return (
    <>
      <Outlet />
    </>
  );
}
export { AdminAuth, WithAuth, WithNav, WithoutNav };
