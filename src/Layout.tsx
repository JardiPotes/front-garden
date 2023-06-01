import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import useToken from "./utils/useToken";
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
