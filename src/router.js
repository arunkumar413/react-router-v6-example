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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/about", element: <About /> },
    ],
  },
]);
