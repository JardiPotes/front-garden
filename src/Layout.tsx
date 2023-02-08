import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FC } from "react";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
