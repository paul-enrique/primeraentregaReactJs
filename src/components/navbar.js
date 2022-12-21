import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
       Carrito de M2 Flexo
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
