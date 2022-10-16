import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Sidebar } from "./pages/Sidebar";
import React from "react";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/about", element: <About /> },
    ],
  },
]);
