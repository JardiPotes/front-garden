import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import useToken from "./hooks/useToken";
export const Layout: FC = () => {
  const { token } = useToken();
  return (
    <>
      <Header token={token} />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
