import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  let btn1 = "active";
  let btn2 = "";

  if (location.pathname.includes('table')) {
    btn1 = "";
    btn2 = "active";
  }
  if (!location.pathname.includes('table')) {
    btn2 = "";
    btn1 = "active"
  }

  return (
    <div>
      <div id="nav">
        <Link to='/'>
          <div className={"btn" + " " + btn1}>
            <p>Currency Convertor</p>
          </div>
        </Link>
        <Link to='/table'>
          <div className={"btn" + " " + btn2}>
            <p>Table</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
