import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { queryClient } from "./ClientProvider";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { GardenPage } from "./pages/Gardens";
import HomePage from "./pages/HomePage";
import MessagesPage from "./pages/Messages";
import { Profile } from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "gardens",
        element: <GardenPage />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "messages",
        element: <MessagesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
