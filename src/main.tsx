import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./ClientProvider";

import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyles";
import { GardenPage } from "./pages/Gardens";

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
