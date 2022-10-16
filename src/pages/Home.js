import React from "react";
import { Sidebar } from "./Sidebar";

export function Home() {
  return (
    <div className="container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <h2>Home Page</h2>

      <p>This is home page</p>
    </div>
  );
}
