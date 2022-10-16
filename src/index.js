import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { router } from "./router";

ReactDOM.render(
  <App />,

  // <RouterProvider router={router} />,

  document.getElementById("root")
);
