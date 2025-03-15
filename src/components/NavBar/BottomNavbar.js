import React, { useContext } from "react";
import { CartContext } from "../../App";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { FaHome, FaShoppingCart, FaUser, FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";


const BottomNavbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Navbar
      fixed="bottom"
      style={{ backgroundColor: "#D9EAFD" }}
      className="d-block d-lg-none shadow-lg"
    >
      <Nav className="w-100 d-flex justify-content-around" style={{ height: "40px", paddingBottom: "55px" }}>
        <Link to="/" className="text-center text-primary text-decoration-none">
          <FaHome size={24} />
          <div className="small text-dark">Home</div>
        </Link>
        <Link to="/categories" className="text-center text-primary text-decoration-none">
          <FaThLarge size={24} />
          <div className="small text-dark">Categories</div>
        </Link>
        <Link to="/cart" className="text-center text-primary text-decoration-none position-relative">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute" style={{ top: "-5px", left: "15px", fontSize: "0.6rem" }}>
                    {cartItems.length}
                  </span>
                )}
          <div className="small text-dark">Cart</div>
        </Link>
        <Link to="/login" className="text-center text-primary text-decoration-none">
          <FaUser size={24} />
          <div className="small text-dark">Profile</div>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNavbar;
