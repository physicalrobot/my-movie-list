import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {


  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/"> 🏠 </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Nav;