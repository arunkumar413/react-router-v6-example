import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="">
      <h3> Sidebar </h3>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <Outlet />
    </div>
  );
}
