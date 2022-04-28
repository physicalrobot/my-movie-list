import React from "react";
import { Link, Outlet } from "react-router-dom";
import house from './house.png'

function Nav() {


  return (
    <div className="products">
      <div className="productsNav">
       <Link to="/"> <img src={house}></img> </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Nav;