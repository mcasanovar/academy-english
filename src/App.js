import React from "react";
import { Outlet } from "react-router-dom";
// components
import { SideBar, NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
