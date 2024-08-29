import React from "react";
import { Outlet } from "react-router-dom";

import { SideBar } from "../components/SideBar";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";

const DefaultLayout = () => {
  return (
      <main className="relative flex min-h-screen bg-bg">
        <SideBar />
        <MainContent>
          <NavBar />

          <Outlet />
        </MainContent>
      </main>
  );
};

export default DefaultLayout;
